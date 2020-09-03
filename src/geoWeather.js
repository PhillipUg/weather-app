import setIcon from './skycon';
import {
  temperature, summary, wrapper, slider,
  mainIcon, forecasts, city, windy, cloudy,
  humid, pres, bottom, currentDate, search, input, error,
} from './dom';

function setWeather(api, forecast) {
  fetch(api)
    .then(res => res.json())
    .then(res => {
      const { name } = res;
      const { country } = res.sys;
      const { temp } = res.main;
      const { humidity } = res.main;
      const clouds = res.clouds.all;
      const wind = res.wind.speed;
      const { pressure } = res.main;
      const desc = res.weather[0].description;
      const { main } = res.weather[0];
      windy.innerHTML = `${Math.round(wind * 3.6)} km/h`;
      humid.innerHTML = `${humidity} &#37;`;
      cloudy.innerHTML = `${clouds} &#37;`;
      pres.innerHTML = `${pressure} hPa`;
      city.innerHTML = `<i class="fas fa-map-marker-alt"></i> &nbsp;${name}, ${country}`;
      temperature.innerHTML = `${Math.floor(temp)} &#176;C`;
      summary.textContent = desc;
      currentDate.innerHTML = `${(new Date(res.dt * 1000)).toUTCString().slice(0, 16)}`;

      const icon2 = document.createElement('canvas');
      icon2.setAttribute('width', '180');
      icon2.setAttribute('height', '180');
      icon2.id = 'icon2';

      mainIcon.appendChild(icon2);

      setIcon('icon2', main);

      if (main === 'Rain') {
        wrapper.style.backgroundImage = 'url(./images/cloud.jpg)';
      } else {
        wrapper.style.backgroundImage = 'url(./images/w2.jpg)';
      }
    });
  /*eslint-disable */
  fetch(forecast)
    .then(res => res.json())
    .then(res => {
      const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const results = res.list.filter(x => {
        const weatherDate = new Date(x.dt_txt);
        if (weatherDate.getHours() === 12 && (weatherDate.getDate() > (new Date(Date.now()).getDate()))) return x;
      });
      /* eslint-enable */

      results.forEach((result, index) => {
        const weatherDate = new Date(result.dt_txt);
        const { main } = result.weather[0];

        const focast = document.createElement('div');
        focast.classList.add('forecast');

        const foreDay = document.createElement('p');
        foreDay.id = 'day';
        foreDay.textContent = weekday[weatherDate.getDay()];

        const iconDiv = document.createElement('div');
        iconDiv.classList.add('forecast-icon');

        const foicon = document.createElement('canvas');
        foicon.id = `icons${index}`;
        foicon.setAttribute('width', '80');
        foicon.setAttribute('height', '80');

        const fotemp = document.createElement('div');
        fotemp.classList.add('forecast-temp');
        fotemp.id = 'forecast-temp';
        fotemp.innerHTML = `${Math.floor(result.main.temp)} &#176;C`;

        focast.appendChild(foreDay);
        iconDiv.appendChild(foicon);
        focast.appendChild(iconDiv);
        focast.appendChild(fotemp);
        bottom.appendChild(focast);

        setIcon(`icons${index}`, main);
      });
    })
    .catch(() => {
      error.classList.toggle('hide');
    });
}

const setGeoWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;

      setWeather(api, forecast);
    });
  }
};

search.addEventListener('click', (e) => {
  e.preventDefault();
  bottom.innerHTML = '';
  mainIcon.innerHTML = '';
  error.classList.add('hide');


  const api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;
  const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;

  if (input.value === '') {
    error.classList.toggle('hide');
  } else {
    setWeather(api, forecast);
  }
  input.value = '';
});

slider.addEventListener('click', () => {
  const currentTemp = parseInt(temperature.innerHTML.slice(0, 2), 10);

  if (currentTemp < 32) {
    temperature.innerHTML = `${Math.round(((currentTemp * 9) / 5) + 32)} &#176;F`;
  } else if (currentTemp > 32) {
    temperature.innerHTML = `${Math.round(((currentTemp - 32) * 5) / 9)} &#176;C`;
  }

  Array.from(forecasts).forEach(item => {
    const newTemp = parseInt(item.innerHTML.slice(0, 2), 10);

    if (newTemp < 32) {
      item.innerHTML = `${Math.round(((newTemp * 9) / 5) + 32)} &#176;F`;
    } else if (newTemp > 32) {
      item.innerHTML = `${Math.round(((newTemp - 32) * 5) / 9)} &#176;C`;
    }
  });
});

export default setGeoWeather;
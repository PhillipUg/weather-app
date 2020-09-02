import { skycons, setIcon } from './skycon';
import { temperature, summary, city, windy, cloudy, humid, pres, bottom, currentDate } from './dom';

const setGeoWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;

      fetch(api).then(res => {
        return res.json();
      }).then(res => {
        const name = res.name;
        const country = res.sys.country;
        const temp = res.main.temp;
        const humidity = res.main.humidity;
        const clouds = res.clouds.all;
        const wind = res.wind.speed;
        const pressure = res.main.pressure;
        const desc = res.weather[0].description;
        const main = res.weather[0].main;
        windy.innerHTML = `${Math.round(wind * 3.6)} km/h`;
        humid.innerHTML = `${humidity} &#37;`
        cloudy.innerHTML = `${clouds} &#37;`
        pres.innerHTML = `${pressure} hPa`;
        city.innerHTML = `<i class="fas fa-map-marker-alt"></i> &nbsp;${name}, ${country}`;
        temperature.innerHTML = `${Math.floor(temp)} &#176;C`;
        summary.textContent = desc;
        currentDate.innerHTML = `${(new Date()).toUTCString().slice(0, 16)}`

        setIcon("icon1", main);
        setIcon("icon2", main);

        skycons.play();

      });
      fetch(forecast)
        .then(res => {
          return res.json();
        })
        .then(res => {
          const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          const results = res.list.filter(x => {
            let weatherDate = new Date(x.dt_txt);
            if (weatherDate.getHours() === 12 && (weatherDate.getDate() > (new Date(Date.now()).getDate()))) return x;
          })
          results.forEach((result, index) => {
            let weatherDate = new Date(result.dt_txt);
            let main = result.weather[0].main;

            const focast = document.createElement('div');
            focast.classList.add('forecast');

            const foreDay = document.createElement('p');
            foreDay.id = "day";
            foreDay.textContent = weekday[weatherDate.getDay()];

            const iconDiv = document.createElement('div');
            iconDiv.classList.add('forecast-icon');

            const foicon = document.createElement('canvas');
            foicon.id = `icons${index}`;
            foicon.setAttribute("width", "80");
            foicon.setAttribute("height", "80");

            const fotemp = document.createElement('div');
            fotemp.id = "forecast-temp";
            fotemp.innerHTML = `${Math.floor(result.main.temp)} &#176;C`;;

            focast.appendChild(foreDay);
            iconDiv.appendChild(foicon);
            focast.appendChild(iconDiv);
            focast.appendChild(fotemp);
            bottom.appendChild(focast);

            setIcon(`icons${index}`, main)
          })

        });
    })
  }
}

export default setGeoWeather;
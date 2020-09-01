


window.addEventListener('DOMContentLoaded', (event) => {
  const temperature = document.getElementById('temperature');
  const icon1 = document.getElementById('icon1');
  const summary = document.getElementById('summary');
  const city = document.getElementById('city');




  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;

      fetch(api)
        .then(res => {
          return res.json();
        })
        .then(res => {

          const name = res.name;
          const country = res.sys.country;
          const temp = res.main.temp;
          const desc = res.weather[0].description;
          city.textContent = `${name}, ${country}`;
          temperature.textContent = temp;
          summary.textContent = desc;

          var skycons = new Skycons({ "color": "white" });

          skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
          skycons.add(document.getElementById("icon2"), Skycons.RAIN);
          skycons.play();

          // console.log(res, res.name, res.sys.country, res.main.temp, res.weather[0].description, res.weather[0].icon)
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
          results.forEach(result => {
            let weatherDate = new Date(result.dt_txt);
            const day = weekday[weatherDate.getDay()]
            const temp = result.main.temp;
            // skycons.set("icon1", Skycons.RAIN);
            // console.log(result, day, result.main.temp, result.weather[0].icon)
          })

        });
    })
  }
})
const wrapper = document.querySelector('.wrapper');
const temperature = document.getElementById('temperature');
const summary = document.getElementById('summary');
const city = document.getElementById('city');
const windy = document.getElementById('wind');
const cloudy = document.getElementById('cloud');
const humid = document.getElementById('humidity');
const pres = document.getElementById('pressure');
const bottom = document.querySelector('.bottom');
const search = document.querySelector('.btn');
const currentDate = document.getElementById('date');
const input = document.getElementById('search');
const error = document.querySelector('.error');
const slider = document.querySelector('.slider');
const forecasts = document.getElementsByClassName('forecast-temp');
const mainIcon = document.querySelector('.icon');


export {
  temperature, summary, mainIcon,
  forecasts, wrapper, slider, city,
  windy, cloudy, humid, pres, bottom,
  currentDate, search, input, error,
};
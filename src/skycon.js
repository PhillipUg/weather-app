/*eslint-disable */
const skycons = new Skycons({
  color: {
    cloud: '#fff',
    leaf: 'green',
    wind: '#fff',
    light_cloud: '#fff',
    dark_cloud: '#fff',
    rain: '#87CEFA',
    sun: 'yellow',
    thunder: 'yellow',
    moon: 'gray',
    fog: 'gray',
  },
});

const setIcon = (iconId, descr) => {
  let currentIcon;
  switch (descr) {
    case 'Clouds':
      currentIcon = Skycons.PARTLY_CLOUDY_DAY;
      break;
    case 'Rain':
      currentIcon = Skycons.RAIN;
      break;
    case 'Clear':
      currentIcon = Skycons.CLEAR_DAY;
      break;
    default:
      currentIcon = Skycons.PARTLY_CLOUDY_DAY;
  }

  skycons.add(iconId, currentIcon);
};


skycons.add('icon5', Skycons.CLOUDY);
skycons.add('icon3', Skycons.WIND);
skycons.add('icon4', Skycons.FOG);
/* eslint-enable */

skycons.play();

export default setIcon;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: temperature, summary, mainIcon, forecasts, slider, city, windy, cloudy, humid, pres, bottom, currentDate, search, input, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"temperature\", function() { return temperature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"summary\", function() { return summary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainIcon\", function() { return mainIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forecasts\", function() { return forecasts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"city\", function() { return city; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windy\", function() { return windy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloudy\", function() { return cloudy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"humid\", function() { return humid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pres\", function() { return pres; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bottom\", function() { return bottom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentDate\", function() { return currentDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\nconst temperature = document.getElementById('temperature');\nconst summary = document.getElementById('summary');\nconst city = document.getElementById('city');\nconst windy = document.getElementById('wind');\nconst cloudy = document.getElementById('cloud');\nconst humid = document.getElementById('humidity');\nconst pres = document.getElementById('pressure');\nconst bottom = document.querySelector('.bottom');\nconst search = document.querySelector('.btn');\nconst currentDate = document.getElementById('date');\nconst input = document.getElementById('search');\nconst error = document.querySelector('.error');\nconst slider = document.querySelector('.slider');\nconst forecasts = document.getElementsByClassName('forecast-temp');\nconst mainIcon = document.querySelector('.icon');\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/geoWeather.js":
/*!***************************!*\
  !*** ./src/geoWeather.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _skycon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skycon */ \"./src/skycon.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nfunction setWeather(api, forecast) {\n  fetch(api)\n    .then(res => res.json())\n    .then(res => {\n      console.log(res)\n      const name = res.name;\n      const country = res.sys.country;\n      const temp = res.main.temp;\n      const humidity = res.main.humidity;\n      const clouds = res.clouds.all;\n      const wind = res.wind.speed;\n      const pressure = res.main.pressure;\n      const desc = res.weather[0].description;\n      const main = res.weather[0].main;\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"windy\"].innerHTML = `${Math.round(wind * 3.6)} km/h`;\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"humid\"].innerHTML = `${humidity} &#37;`\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"cloudy\"].innerHTML = `${clouds} &#37;`\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"pres\"].innerHTML = `${pressure} hPa`;\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"city\"].innerHTML = `<i class=\"fas fa-map-marker-alt\"></i> &nbsp;${name}, ${country}`;\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"temperature\"].innerHTML = `${Math.floor(temp)} &#176;C`;\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"summary\"].textContent = desc;\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"currentDate\"].innerHTML = `${(new Date(res.dt * 1000)).toUTCString().slice(0, 16)}`\n      console.log(main)\n\n      const icon2 = document.createElement('canvas');\n      icon2.setAttribute(\"width\", \"180\");\n      icon2.setAttribute(\"height\", \"180\");\n      icon2.id = \"icon2\";\n\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"mainIcon\"].appendChild(icon2);\n\n      Object(_skycon__WEBPACK_IMPORTED_MODULE_0__[\"setIcon\"])(\"icon2\", main);\n    });\n\n  fetch(forecast)\n    .then(res => res.json())\n    .then(res => {\n      const weekday = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\n      const results = res.list.filter(x => {\n        let weatherDate = new Date(x.dt_txt);\n        if (weatherDate.getHours() === 12 && (weatherDate.getDate() > (new Date(Date.now()).getDate()))) return x;\n      });\n\n      results.forEach((result, index) => {\n        let weatherDate = new Date(result.dt_txt);\n        let main = result.weather[0].main;\n\n        const focast = document.createElement('div');\n        focast.classList.add('forecast');\n\n        const foreDay = document.createElement('p');\n        foreDay.id = \"day\";\n        foreDay.textContent = weekday[weatherDate.getDay()];\n\n        const iconDiv = document.createElement('div');\n        iconDiv.classList.add('forecast-icon');\n\n        const foicon = document.createElement('canvas');\n        foicon.id = `icons${index}`;\n        foicon.setAttribute(\"width\", \"80\");\n        foicon.setAttribute(\"height\", \"80\");\n\n        const fotemp = document.createElement('div');\n        fotemp.classList.add('forecast-temp');\n        fotemp.id = \"forecast-temp\";\n        fotemp.innerHTML = `${Math.floor(result.main.temp)} &#176;C`;;\n\n        focast.appendChild(foreDay);\n        iconDiv.appendChild(foicon);\n        focast.appendChild(iconDiv);\n        focast.appendChild(fotemp);\n        _dom__WEBPACK_IMPORTED_MODULE_1__[\"bottom\"].appendChild(focast);\n\n        Object(_skycon__WEBPACK_IMPORTED_MODULE_0__[\"setIcon\"])(`icons${index}`, main);\n      })\n\n    })\n    .catch(() => {\n      _dom__WEBPACK_IMPORTED_MODULE_1__[\"error\"].classList.toggle('hide');\n    });\n}\n\nconst setGeoWeather = () => {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(position => {\n      const lat = position.coords.latitude;\n      const long = position.coords.longitude;\n      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;\n      const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;\n\n      setWeather(api, forecast);\n    })\n  }\n}\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"search\"].addEventListener('click', (e) => {\n  e.preventDefault();\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"bottom\"].innerHTML = \"\";\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"mainIcon\"].innerHTML = \"\";\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"error\"].classList.add('hide');\n\n\n  const api = `https://api.openweathermap.org/data/2.5/weather?q=${_dom__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;\n  const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${_dom__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;\n\n  if (_dom__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value) setWeather(api, forecast);\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value = '';\n})\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"slider\"].addEventListener('click', () => {\n  let currentTemp = parseInt(_dom__WEBPACK_IMPORTED_MODULE_1__[\"temperature\"].innerHTML.slice(0, 2));\n\n  if (currentTemp < 32) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"temperature\"].innerHTML = `${Math.round((currentTemp * 9 / 5) + 32)} &#176;F`;\n  } else if (currentTemp > 32) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"temperature\"].innerHTML = `${Math.round((currentTemp - 32) * 5 / 9)} &#176;C`;\n  }\n\n  Array.from(_dom__WEBPACK_IMPORTED_MODULE_1__[\"forecasts\"]).forEach(item => {\n    let newTemp = parseInt(item.innerHTML.slice(0, 2));\n\n    if (newTemp < 32) {\n      item.innerHTML = `${Math.round((newTemp * 9 / 5) + 32)} &#176;F`;\n    } else if (newTemp > 32) {\n      item.innerHTML = `${Math.round((newTemp - 32) * 5 / 9)} &#176;C`;\n    }\n  });\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setGeoWeather);\n\n//# sourceURL=webpack:///./src/geoWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _geoWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geoWeather */ \"./src/geoWeather.js\");\n\n\nwindow.addEventListener('load', () => {\n  Object(_geoWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/skycon.js":
/*!***********************!*\
  !*** ./src/skycon.js ***!
  \***********************/
/*! exports provided: skycons, setIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skycons\", function() { return skycons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIcon\", function() { return setIcon; });\nconst skycons = new Skycons({\n  \"color\": {\n    \"cloud\": \"#fff\",\n    \"leaf\": \"green\",\n    \"wind\": \"#fff\",\n    \"light_cloud\": \"#fff\",\n    \"dark_cloud\": \"#fff\",\n    \"rain\": \"#87CEFA\",\n    \"sun\": \"yellow\",\n    \"thunder\": \"yellow\",\n    \"moon\": \"gray\",\n    \"fog\": \"gray\"\n  }\n});\n\nconst setIcon = (iconId, descr) => {\n  let currentIcon;\n  switch (descr) {\n    case \"Clouds\":\n      currentIcon = Skycons.PARTLY_CLOUDY_DAY;\n      break;\n    case \"Rain\":\n      currentIcon = Skycons.RAIN;\n      break;\n    case \"Clear\":\n      currentIcon = Skycons.CLEAR_DAY;\n      break;\n    // default:\n    // currentIcon = Skycons.PARTLY_CLOUDY_DAY;\n  }\n\n  skycons.add(iconId, currentIcon);\n}\n\n\nskycons.add(\"icon5\", Skycons.CLOUDY);\nskycons.add(\"icon3\", Skycons.WIND);\nskycons.add(\"icon4\", Skycons.FOG);\n\nskycons.play();\n\n\n\n//# sourceURL=webpack:///./src/skycon.js?");

/***/ })

/******/ });
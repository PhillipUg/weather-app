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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var skycons = new Skycons({ \"color\": \"white\" });\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const temperature = document.getElementById('temperature');\n  const icon1 = document.getElementById('icon1');\n  const summary = document.getElementById('summary');\n  const city = document.getElementById('city');\n\n\n  skycons.add(\"icon1\", Skycons.PARTLY_CLOUDY_DAY);\n  skycons.set(document.getElementById(\"icon2\"), Skycons.RAIN);\n  skycons.play();\n\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(position => {\n      const lat = position.coords.latitude;\n      const long = position.coords.longitude;\n      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;\n      const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=71051542ca7ca9c015a46c330e051ec1`;\n\n      fetch(api)\n        .then(res => {\n          return res.json();\n        })\n        .then(res => {\n\n          const name = res.name;\n          const country = res.sys.country;\n          const temp = res.main.temp;\n          const desc = res.weather[0].description;\n          const icon = res.weather[0].icon;\n          city.textContent = `${name}, ${country}`;\n          temperature.textContent = temp;\n          summary.textContent = desc;\n\n\n\n          // console.log(res, res.name, res.sys.country, res.main.temp, res.weather[0].description, res.weather[0].icon)\n        });\n      fetch(forecast)\n        .then(res => {\n          return res.json();\n        })\n        .then(res => {\n          const weekday = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\n          const results = res.list.filter(x => {\n            let weatherDate = new Date(x.dt_txt);\n            if (weatherDate.getHours() === 12 && (weatherDate.getDate() > (new Date(Date.now()).getDate()))) return x;\n          })\n          results.forEach(result => {\n            let weatherDate = new Date(result.dt_txt);\n            const day = weekday[weatherDate.getDay()]\n            const temp = result.main.temp;\n            const icon = result.weather[0].icon;\n            // skycons.set(\"icon1\", Skycons.RAIN);\n            // console.log(result, day, result.main.temp, result.weather[0].icon)\n          })\n\n        });\n    })\n  }\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
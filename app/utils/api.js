import axios from 'axios'

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKey = '24e8181da66a6ef9ee92a38e0ff14ebf';

// Current weather
// http://api.openweathermap.org/data/2.5/
// weather
// ?q=CITY-NAME
// &type=accurate
// &APPID=YOUR-API-KEY

// 5-day forecast
// http://api.openweathermap.org/data/2.5/
// forecast/daily
// ?q=CITY-NAME
// &type=accurate
// &APPID=YOUR-API-KEY
// &cnt=5

function makeURL (city, type, cnt) {
  return _baseURL + type + '?q=' + encodeURIComponent(city) + '&type=accurate' + '&APPID=' + _APIKey + cnt
}

function getCurrentWeather (city) {
  var url = makeURL(city, 'weather', '');

  return axios.get(url)
    .then(function (weatherData) {
      console.log(Math.floor(weatherData.data.main.temp - 273.15));
  })
}

function getForecast (city) {
  var url = makeURL(city, 'forecast/daily', '&cnt=5');

  return axios.get(url)
    .then(function (weatherData) {
      //console.log(weatherData.data.list);
      var forecastArray = weatherData.data.list.map(function(obj) {
        return Math.floor(obj.temp.day - 273.15)
      })
      console.log(forecastArray);
  })
}

module.exports = {
  currentWeather: getCurrentWeather,
  forecast: getForecast
};

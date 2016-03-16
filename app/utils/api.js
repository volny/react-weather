import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKey = '24e8181da66a6ef9ee92a38e0ff14ebf';

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
  let url = makeURL(city, 'weather', '');

  return axios.get(url)
    .then(function (weatherData) {
      return weatherData.data
  })
}

function getForecast (city) {
  let url = makeURL(city, 'forecast/daily', '&cnt=5');

  return axios.get(url)
    .then(function (weatherData) {
      return weatherData.data.list
  })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};


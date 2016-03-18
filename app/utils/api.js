import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _APIKey = '24e8181da66a6ef9ee92a38e0ff14ebf'

export function makeURL (city, type, cnt) {
  return _baseURL + type + '?q=' + encodeURIComponent(city) + '&type=accurate' + '&APPID=' + _APIKey + cnt
}

export function getForecast (city) {
  let url = makeURL(city, 'forecast/daily', '&cnt=5')

  return axios.get(url)
    .then(function (weatherData) {
      return weatherData.data.list
  })
}

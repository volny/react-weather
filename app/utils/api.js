import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _APIKey = '24e8181da66a6ef9ee92a38e0ff14ebf'


function makeURL (city) {
  return (
    _baseURL +
    'forecast/daily' +
    '?q=' +
    encodeURIComponent(city) +
    '&type=accurate' +
    '&APPID=' +
    _APIKey +
    '&cnt=5'
  )
}

function getCurrentWeather (city) {
  let url = makeURL(city, 'weather', '');

  return axios.get(url)
    .then(function (weatherData) {
      return weatherData.data
  })
}

export async function getCurrentWeather (city) {
  const weatherData = await axios.get(makeURL)
}

export async function getForecast (city) {
  const weatherData = await axios.get(makeURL(city))
  return weatherData.data.list
}

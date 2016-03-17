module.exports = {
  mainContainer: {
    width: '100%',
    height: '92%'
  },
  homeContainer: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  subheader: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  },
  cityHeader: {
    textAlign: 'center',
    fontSize: 45,
    color:'#8c9899',
    fontWeight: 100
  },
  header: {
  background: 'transparent',
  color: '#2c3e50',
  padding: 5
  },
  forecastContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  forecastHeader: {
    fontSize: 60,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  forecastSubheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  forecastWeatherIcon: {
    height: 60
  },
  detailButton: {
    color: '#999',
    background: 'transparent',
    border: '2px solid',
    borderColor: '#aaa'

  },
  detailWeatherIcon: {
    height: 120
  }
}

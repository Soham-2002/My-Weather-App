const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '168af9e5damsh1240198abc1cf88p1afe14jsn3c67a17d0eed',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};
const getWeather = (city) => {
  cityName.innerHTML = city
  fetch('https://open-weather13.p.rapidapi.com/city/'+ city +'/EN' , options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      temp.innerHTML = response.main.temp
      temp2.innerHTML = response.main.temp
      feels_like.innerHTML = response.main.feels_like
      humidity.innerHTML = response.main.humidity
      humidity2.innerHTML = response.main.humidity
      min_temp.innerHTML = response.main.temp_min
      max_temp.innerHTML = response.main.temp_max
      wind_speed.innerHTML = response.wind.speed
      wind_speed2.innerHTML = response.wind.speed
      wind_degrees.innerHTML = response.wind.deg
      sunrise.innerHTML = response.sys.sunrise
      sunset.innerHTML = response.sys.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")

fetch('https://open-weather13.p.rapidapi.com/city/kolkata/EN', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    cloud_pct3.innerHTML = response.clouds.all
    temp3.innerHTML = response.main.temp
    feels_like3.innerHTML = response.main.feels_like
    humidity3.innerHTML = response.main.humidity
    min_temp3.innerHTML = response.main.temp_min
    max_temp3.innerHTML = response.main.temp_max
    wind_speed3.innerHTML = response.wind.speed
    wind_degrees3.innerHTML = response.wind.deg
    sunrise3.innerHTML = response.sys.sunrise
    sunset3.innerHTML = response.sys.sunset
  })
  .catch(err => console.error(err));

fetch('https://open-weather13.p.rapidapi.com/city/delhi/EN', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    cloud_pct4.innerHTML = response.clouds.all
    temp4.innerHTML = response.main.temp
    feels_like4.innerHTML = response.main.feels_like
    humidity4.innerHTML = response.main.humidity
    min_temp4.innerHTML = response.main.temp_min
    max_temp4.innerHTML = response.main.temp_max
    wind_speed4.innerHTML = response.wind.speed
    wind_degrees4.innerHTML = response.wind.deg
    sunrise4.innerHTML = response.sys.sunrise
    sunset4.innerHTML = response.sys.sunset
  })
  .catch(err => console.error(err));

fetch('https://open-weather13.p.rapidapi.com/city/mumbai/EN', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    cloud_pct5.innerHTML = response.clouds.all
    temp5.innerHTML = response.main.temp
    feels_like5.innerHTML = response.main.feels_like
    humidity5.innerHTML = response.main.humidity
    min_temp5.innerHTML = response.main.temp_min
    max_temp5.innerHTML = response.main.temp_max
    wind_speed5.innerHTML = response.wind.speed
    wind_degrees5.innerHTML = response.wind.deg
    sunrise5.innerHTML = response.sys.sunrise
    sunset5.innerHTML = response.sys.sunset
  })
  .catch(err => console.error(err));

fetch('https://open-weather13.p.rapidapi.com/city/chennai/EN', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    cloud_pct6.innerHTML = response.clouds.all
    temp6.innerHTML = response.main.temp
    feels_like6.innerHTML = response.main.feels_like
    humidity6.innerHTML = response.main.humidity
    min_temp6.innerHTML = response.main.temp_min
    max_temp6.innerHTML = response.main.temp_max
    wind_speed6.innerHTML = response.wind.speed
    wind_degrees6.innerHTML = response.wind.deg
    sunrise6.innerHTML = response.sys.sunrise
    sunset6.innerHTML = response.sys.sunset
  })
  .catch(err => console.error(err));
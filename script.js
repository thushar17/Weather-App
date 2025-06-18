let apiKey="9efbbf95724d5f9900713938499648b1";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"
const searchBox=document.querySelector('.search input')
const searchBtn=document.querySelector('.btn')
const icon=document.querySelector('.weather-icon')
async function checkWheather(city) {
    const response= await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    if (response.status==404) {
      document.querySelector('.error').style.display='block'
      document.querySelector('.weather').style.display='none'
    }
    else{
    var data= await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML= data.main.humidity+ "%"
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h"
    if(data.weather[0].main== "Clouds"){
     icon.src="images/clouds.png"
    }
   else if(data.weather[0].main== "Clear"){
     icon.src="images/clear.png"
    }
   else if(data.weather[0].main== "Drizzle"){
     icon.src="images/drizzle.png"
    }
  else  if(data.weather[0].main== "Mist"){
     icon.src="images/mist.png"
    }
  else  if(data.weather[0].main== "Rain"){
     icon.src="images/rain.png"
    }
   else if(data.weather[0].main== "Snow"){
     icon.src="images/snow.png"
    }
    document.querySelector('.weather').style.display='block';
}
}
searchBtn.addEventListener("click", ()=>{
checkWheather(searchBox.value)
})
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
      checkWheather(searchBox.value);
  }
})
const apiKey="8ea63a1bb53534240625f6c0eeec5f41";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const wet_icon=document.querySelector(".wet-icon")

async function checkWeather(city) {
    const response=await fetch(apiurl+city+`&appid=${apiKey}`);
    var data=await response.json();

    if (response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".Wind").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main==="Clouds")
        {
            wet_icon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            wet_icon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Clear")
        {
            wet_icon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            wet_icon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            wet_icon.src="images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

}

searchBtn.addEventListener("click",()=>
{
    checkWeather(searchBox.value);
})


document.querySelector("form").addEventListener("submit",SUBMITTED);

function SUBMITTED(){
    event.preventDefault();
    let city=document.querySelector("#search").value;
    console.log(city);
    getData(city);
}

let API_KEY=`b6d44ee3a34cdae2a523bae10284dd7b`;
async function getData(city){
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`


try {
    let res= await fetch(url);
 let res1= await res.json();
  displayData(res1);
} catch (error) {
  console.log(error);  
}


}


function displayData(data){
    document.querySelector("#container").innerHTML="";
  console.log(data.main.temp);
    let weatherCard=document.createElement("div");

    let place=document.createElement("h1");
    place.textContent=`${data.name}`;

    let temp=document.createElement("p");
    temp.textContent=`TEMP:${data.main.temp}deg C`;

    let pressure=document.createElement("p");
    pressure.textContent=`PRESSURE:${data.main.pressure}`;

    let humidity=document.createElement("p");
    humidity.textContent=`HUMIDITY:${data.main.feels_like}`;

    let wind_speed=document.createElement("p");
    wind_speed.textContent=`WIND SPEED:${data.wind.speed}`;

    let sunrise=document.createElement("p");
    sunrise.textContent=`SUNRISE:${data.sys.sunrise}`;

    let sunset=document.createElement("p");
    sunset.textContent=`SUNSET:${data.sys.sunset}`;

    let weather_description=document.createElement("p");
    
    let wd=`${data.weather[0].description}`;
    if(wd==="haze"){
        weather_description.innerHTML= `<i class="fa-solid fa-sunset" id="color"></i>`;
    }
    else{
        weather_description.textContent=`clear sky`;
    }


    weatherCard.append(place,temp,pressure, humidity,wind_speed,sunrise,sunset,weather_description);

     document.querySelector("#container").append(weatherCard);
}
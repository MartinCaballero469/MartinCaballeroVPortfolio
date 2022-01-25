const WEATHER_API_KEY = "c58b170be5ec4b688b2194913222101";

const api_url = "https://api.weatherapi.com/v1/current.json?key=";
var weatherRequest = new Request('https://api.weatherapi.com/v1/current.json?key=c58b170be5ec4b688b2194913222101&q=London&aqi=no');

function startWalk() {
    document.getElementById("StartScreen").classList.add("d-none");
    document.getElementById("ProgSelection").classList.remove("d-none");
    document.getElementById("IntroBox").classList.remove("align-items-center");

}

fetch(weatherRequest)
  .then(response => {
    if (response.status === 200) {
      return response.json();

    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(data => {
    console.log(data.location.name) })
  .catch(console.error);;




const apiKey = "573141f2fd4848ae9bc134655230904";
let searchPlace = document.querySelector(".search-location");

//DOM elements
const city = document.querySelector(".city-weather__city-name");
const country = document.querySelector(".city-weather__country");
const temp = document.querySelector(".city-weather__temp");
const weatherStats = document.querySelector(".city-weather__weather-status");
const weatherIcon = document.querySelector(".city-weather__status-icon");
//fetch api
searchPlace.addEventListener("keyup", async function (e) {
  try {
    if (e.key === "Enter") {
      const weatherAPI = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchPlace.value}&aqi=no`
      );
      const weatherObject = await weatherAPI.json();
      city.innerHTML = weatherObject.location.name;
      country.innerHTML = weatherObject.location.country;
      temp.innerHTML = `${weatherObject.current.temp_c} &#8451;`;
      weatherStats.innerHTML = weatherObject.current.condition.text;
      weatherIcon.classList.remove("hidden");
      weatherIcon.style.backgroundImage = `url(${weatherObject.current.condition.icon})`;
    }
  } catch (err) {
    city.innerHTML = "Error";
    country.innerHTML = "Error";
    temp.innerHTML = "Error";
    weatherIcon.classList.add("hidden");
    weatherStats.innerHTML = "An error occured while sending the request";
  }
});

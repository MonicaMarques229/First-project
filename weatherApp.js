let apiKey = "616b14cbd38253313b3b8852fa77335d";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let button = document.getElementById("search");

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  axios.get(`${apiUrl}&appid=${apiKey}&lat=${lat}&lon=${lon}`).then(showData);
}

function getCurrent() {
  let current = document.getElementById("current");
  current.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(handlePosition);
  });
}

function showData(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;

  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].description}`;

  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}`;
}

function search() {
  // let date = document.getElementById("date");
  // let d = new Date();
  // let weekDays = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ];
  // date.innerHTML =
  //   weekDays[d.getDay()] + "," + d.getHours() + ":" + d.getMinutes();
  //let button = document.getElementById("search");
  button.addEventListener("click", () => {
    let inputValue = document.getElementById("city-input").value;
    axios.get(`${apiUrl}&appid=${apiKey}&q=${inputValue}`).then(showData);
  });

  // let celsius = document.getElementById("celsius-link");
  // let fahrenheit = document.getElementById("fahrenheit-link");
  // let temperature = document.getElementById("temperature");

  // celsius.addEventListener("click", () => {
  //   temperature.innerHTML = "19";
  // });
  // fahrenheit.addEventListener("click", () => {
  //   temperature.innerHTML = "66";
  // });
}
search();
getCurrent();

function getWeather() {
  const city = document.getElementById("cityInput").value || "Visakhapatnam";
  document.getElementById("weatherResult").innerHTML = `
    <h2>📍 ${city}</h2>
    <p>🌡 Temperature: 30°C</p>
    <p>💧 Humidity: 75%</p>
    <p>🌬 Wind Speed: 45 km/h</p>
    <p>🌩 Condition: Cyclonic Thunderstorm</p>
  `;
}


const apiKey = "ec4cd54bad20438598f565276b7f44d4"; // Replace this with your actual key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = "City not found!";
        return;
      }
      const result = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(err => {
      console.error(err);
      alert("Error fetching weather data.");
    });
}

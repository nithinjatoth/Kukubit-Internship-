const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('locationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    getWeather();
});

function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a location');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    // Make AJAX request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(weatherData) {
    const weatherInfoContainer = document.getElementById('weatherInfo');

    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    const weatherInfo = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfoContainer.innerHTML = weatherInfo;
}

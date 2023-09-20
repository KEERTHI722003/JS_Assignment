// API key obtained from OpenWeatherMap
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data and update the HTML
async function fetchWeatherData() {
  try {
    // Fetch weather data using the API key
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    // Parse the JSON response
    const data = await response.json();

    // Update the HTML with weather information
    const weatherContainer = document.querySelector('.weather-data');
    weatherContainer.innerHTML = `
      <h2>Weather in ${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error('Error:', error);
    const weatherContainer = document.querySelector('.weather-data');
    weatherContainer.innerHTML = '<p>Failed to fetch weather data.</p>';
  }
}

// Call the fetchWeatherData function when the page loads
window.addEventListener('load', fetchWeatherData);

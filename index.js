       async function getWeather() {
			const  apiKey = '143e7e8de4mshe3a76fabf6652b1p1aeb6fjsn9f75c6e1c4f6';                                                                                                                                   
			 const cityInput = document.querySelector('city_input').value;
 
			 const url = `https://open-weather13.p.rapidapi.com/city/${cityInput}`;
			 const options = {
				 method: 'GET',
				 headers: {
					 'X-RapidAPI-Key': apiKey,
					 'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
				 }   
			 };
 
			 try {
				 const response = await fetch(url, options);
				 const result = await response.json();
 
				 // Display weather information
				 const additionalinfo = document.querySelector('additional-info');
				 additionalinfo.innerHTML = `<p>Temperature: ${result.main.temp}°C</p>
										 <p>Humidity: ${result.main.humidity}%</p>
										 <p>Wind Speed: ${result.wind.speed} km/h</p>`;
			 } catch (error) {
				 console.error(error);
				 alert('Error fetching weather data. Please try again.');
			 }
		 }
let api_key = 'cb3c589d197f200f7906a863b601b725'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15

document.getElementById('buttonSearch').addEventListener('click', () => {
    const city = document.getElementById('searchCity').value;
    if (city) {
        fetchWeatherFacts(city);
    }
});
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function fetchWeatherFacts(city) {
    fetch(`${urlBase}?q=${city}&appid=${api_key}&lang=es}`)
        .then(response => response.json())
        .then(response => weatherFacts(response));
        
}

function weatherFacts(response){
    
    const divWeatherFacts = document.getElementById('weatherFacts')
    divWeatherFacts.innerHTML=''

    const nameCity = response.name
    const nameCountry = response.sys.country
    const temperature = response.main.temp
    const description = response.weather[0].description
    const icon = response.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${nameCity}, ${nameCountry}`

    const temperatueInfo = document.createElement('p')
    temperatueInfo.textContent = `La temperatura es de: ${Math.round(temperature-difKelvin)}°C`
    
    const iconInfo = document.createElement('img')
    iconInfo.src= `https://openweathermap.org/img/wn/10d@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `Los comentarios del día son: ${description}`


    divWeatherFacts.appendChild(cityTitle)
    divWeatherFacts.appendChild(temperatueInfo)
    divWeatherFacts.appendChild(iconInfo)
    divWeatherFacts.appendChild(descriptionInfo)


}
const searchBtn = document.getElementById('search-btn');
const weatherList = document.getElementById('weather-list');


// Add event listner
searchBtn.addEventListener('click',getCityName);



// add city function
function getCityName() {
    const inputTxt = document.getElementById('input-text').value.trim();
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputTxt}&units=metric&appid=11716eae80b260a822aa850729d8b78b`)
    .then(response => response.json())
    .then(data => {
       

                let html = `
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h1>${data.name}</h1>
                <h3><span>${data.main.temp}</span>&deg;C</h3>
                <h1 class="lead">${data.weather[0].main}</h1>
                <p>${data.weather[0].description}</p>
                `;
                weatherList.innerHTML = html;
            

    })
    .catch(err => {
        html =`
            <h1 class="text-warning">Sorry!! We didn't find ant city.</h1>
        `;
        weatherList.innerHTML = html;
    })

}
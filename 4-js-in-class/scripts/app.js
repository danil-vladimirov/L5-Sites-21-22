let body = document.body;

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

body.style.setProperty('background-color', 'rgb(' +r+ ',' +g+ ',' +b+ ')');

let title = document.querySelector('.title-city');

title.addEventListener('mouseover', function(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    title.style.setProperty('color', 'rgb(' +red+ ',' +green+ ',' +blue+ ')');
})

let button = document.querySelector('.title-next');
let image = 1

button.addEventListener('click', function(){
    let imageObject = document.querySelector('.cover-image img');
    let gallery = ['assets/cover.png', 'assets/cover-1.png','assets/cover-2.jpg']

    if (image == gallery.length) {
        image = 0
    };
    imageObject.setAttribute('src', gallery[image]);
    image++;
})

let today = new Date();
let time = today.getHours() + ':' + today.getMinutes();

document.querySelector('.time-clock').innerHTML = time

let ipcountry = new XMLHttpRequest()
ipcountry.open('GET', 'https://api.country.is', true)
ipcountry.onreadystatechange = function() {
    if (ipcountry.readyState == 4) {
        if (ipcountry.status == 200) {
            let data = JSON.parse(ipcountry.responseText)
            let country = data.country
            let visitor = document.querySelector('.country-code')
            visitor.innerHTML = country
        }
    }
}
ipcountry.send(null)

let weather = new XMLHttpRequest()
weather.open('GET', 'https://goweather.herokuapp.com/weather/Tbilisi', true)
weather.onreadystatechange = function() {
    if (weather.readyState == 4) {
        if (weather.status == 200) {
            let data = JSON.parse(weather.responseText)
            let temperature = data.temperature
            let description = data.description
            let forecast = document.querySelector('.weather-api')
            forecast.innerHTML = temperature + ' — ' + description
            let temperatureTomorrow = data.forecast[0].temperature
            let windTomorrow = data.forecast[0].wind
            let forecastTomorrow = document.querySelector('.weather-api-tomorrow')
            forecastTomorrow.innerHTML = temperatureTomorrow + ' & Wind: ' + windTomorrow
        }
    }
}
weather.send(null)

let buttonImage = document.querySelector('.button-text')

buttonImage.addEventListener('click', function(){
    let e = document.querySelector('.hidden-image')
    if(e.style.display == 'flex')
    e.style.display = 'none'
    else
    e.style.display = 'flex'
})
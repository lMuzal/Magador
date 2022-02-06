const weatherApiKey = 'f28daf2b4eff18717de60ab192054540';
const weather = document.getElementById('weather-widget');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');
const tempMin = document.getElementById('temp-min');
const temp = document.getElementById('temp');
const tempMax = document.getElementById('temp-max');
const tempFeel = document.getElementById('temp-feel');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const weatherBtn = document.getElementById('weather-button');
const weatherCloseBtn = document.getElementById('overlay-close-button');
const roomBtn = document.getElementById('rooms');
const galleryBtn = document.getElementById('gallery');
const reservationsBtn = document.getElementById('reservations');
const contactBtn = document.getElementById('contact');
const logo = document.querySelector('.loader');

(function getWeather(){
    console.log("click");
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=3081752&units=metric&appid=${weatherApiKey}&lang=pl`)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            description.innerHTML = data.weather[0].description;
            weatherIcon.innerHTML = data.weather[0].icon;
            tempMin.innerHTML = `Min.<br>${data.main.temp_min}&#8451`;
            temp.innerHTML = `<span style="font-size: 20px">Temp.</span><br>${data.main.temp}&#8451`;
            tempMax.innerHTML = `Max.<br>${data.main.temp_max}&#8451`;
            tempFeel.innerHTML = `Temp. odczuwalna: ${data.main.feels_like}&#8451`;
            humidity.innerHTML = `Wilgotność: ${data.main.humidity} %`;
            pressure.innerHTML = `Ciśnienie: ${data.main.pressure} Hpa`;

        })
})();


weatherBtn.addEventListener("click", windguruForecast);

function windguruForecast(){

    document.querySelector('#overlay').style.display = "flex";
    document.querySelector('#windguru').style.display = "block";
}

weatherCloseBtn.addEventListener("click", closeOverlay);

function closeOverlay(){

    document.querySelector('#overlay').style.display = "none";
    window.location.href = "index.html";
}

logo.addEventListener("click", logoClick);
    
function logoClick(){

    document.querySelector('#windguru').style.display = "none";
    document.querySelector('#overlay').style.display = "block";
    document.querySelector('.big-loader').style.display = "block";
        
    setTimeout(() => {
        window.location.href = "https://github.com/lMuzal"
    }, 3000);
}

roomBtn.addEventListener('click', loadRooms);

function loadRooms() {
    fetch('rooms.html')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('center').innerHTML = data; 
        })
}

galleryBtn.addEventListener('click', loadGallery);

function loadGallery() {
    fetch('gallery.html')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('center').innerHTML = data; 
        })
}

reservationsBtn.addEventListener('click', loadReservations);

function loadReservations() {
    fetch('reservations.html')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('center').innerHTML = data; 
        })
}

contactBtn.addEventListener('click', loadContact);

function loadContact() {
    fetch('contact.html')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('center').innerHTML = data; 
        })
}
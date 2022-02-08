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
            const weatherIcons = data.weather[0].icon;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcons}@2x.png">`;
            tempMin.innerHTML = `Min.<br>${data.main.temp_min}<span style= "font-family: 'Segoe UI Symbol'">&#8451<span>`;
            temp.innerHTML = `<span style="font-size: 20px">Temp.</span><br>${data.main.temp}<span style= "font-family: 'Segoe UI Symbol'">&#8451<span>`;
            tempMax.innerHTML = `Max.<br>${data.main.temp_max}<span style= "font-family: 'Segoe UI Symbol'">&#8451<span>`;
            tempFeel.innerHTML = `Temp. odczuwalna: ${data.main.feels_like}<span style= "font-family: 'Segoe UI Symbol'">&#8451<span>`;
            humidity.innerHTML = `Wilgotność: ${data.main.humidity} %`;
            pressure.innerHTML = `Ciśnienie: ${data.main.pressure} hPa`;

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
    window.location.href = history.back();
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

// GALLERY

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
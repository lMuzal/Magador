const weatherApiKey = 'f28daf2b4eff18717de60ab192054540';
const weather = document.getElementById('weather-widget');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');
const tempMin = document.getElementById('temp-min');
const temp = document.getElementById('temp');
const tempMax = document.getElementById('temp-max');
const tempFeel = document.getElementById('temp-feel');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const windDir = document.getElementById('wind-dir');
const pressure = document.getElementById('pressure');
const weatherBtn = document.getElementById('weather-button');
const weatherCloseBtn = document.getElementById('overlay-close-button');
const galleryBtn = document.getElementById('gallery');
const reservationsBtn = document.getElementById('reservations');
const contactBtn = document.getElementById('contact');
const logo = document.querySelector('.loader');
const galleryCont1 = document.getElementById('chalepe');
const galleryCont2 = document.getElementById('chalepe-zima');



(function getWeather(){
    console.log("click");
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=3081752&units=metric&appid=${weatherApiKey}&lang=pl`)
        .then(res => res.json())
        .then(data => {
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
                wind.innerHTML = `Wiatr (w por.): ${data.wind.speed}(${data.wind.gust}) m/s`;
                
                (() => {
                    const windDeg = data.wind.deg;
                    console.log(windDeg);

                    if (windDeg >= 348 && windDeg <= 360 || windDeg >= 0 && windDeg <= 11) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down"></i> N</i>';
                    }
                    else if (windDeg >= 11 && windDeg <= 33) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(22.5deg)"></i> NNE</i>';
                    }
                    else if (windDeg >= 33 && windDeg <= 56) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(45deg)"></i> NE</i>';
                    }
                    else if (windDeg >= 56 && windDeg <= 78) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(67.5deg)"></i> ENE</i>';
                    }
                    else if (windDeg >= 78 && windDeg <= 101) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(90deg)"></i> E</i>';
                    }
                    else if (windDeg >= 101 && windDeg <= 123) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(112.5deg)"></i> ESE</i>';
                    }
                    else if (windDeg >= 123 && windDeg <= 146) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(135deg)"></i> SE</i>';
                    }
                    else if (windDeg >= 146 && windDeg <= 168) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(157.5deg)"></i> SSE</i>';
                    }
                    else if (windDeg >= 168 && windDeg <= 191) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(180deg)"></i> S</i>';
                    }
                    else if (windDeg >= 191 && windDeg <= 213) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(202.5deg)"></i> SSW</i>';
                    }
                    else if (windDeg >= 213 && windDeg <= 236) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(225deg)"></i> SW</i>';
                    }
                    else if (windDeg >= 236 && windDeg <= 258) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(247.5deg)"></i> WSW</i>';
                    }
                    else if (windDeg >= 258 && windDeg <= 281) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(270deg)"></i> W</i>';
                    }
                    else if (windDeg >= 281 && windDeg <= 303) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(292.5deg)"></i> WNW</i>';
                    }
                    else if (windDeg >= 303 && windDeg <= 326) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(315deg)"></i> NW</i>';
                    }
                    else if (windDeg >= 326 && windDeg <= 348) {
                        windDir.innerHTML = '<p>Kierunek wiatru</p><i class="fas fa-chevron-circle-down" style= "transform: rotate(337.5deg)"></i> NNW</i>';
                    }
                    else {
                        windDir.innerHTML = '<i class="fas fa-wind"></i>';
                    }
                })()
            })    
})();


weatherBtn.addEventListener("click", windguruForecast);

function windguruForecast(){
    document.querySelector('#gallery-one').style.display = "none";
    document.querySelector('#gallery-two').style.display = "none";
    document.querySelector('#overlay').style.display = "flex";
    document.querySelector('#windguru').style.display = "block";
}

weatherCloseBtn.addEventListener("click", closeOverlay);

function closeOverlay(){
    const link = window.location.href
    document.querySelector('#overlay').style.display = "none";
    window.location.href = link;
}

logo.addEventListener("click", logoClick);
    
function logoClick(){
    document.querySelector('#gallery-one').style.display = "none";
    document.querySelector('#gallery-two').style.display = "none";
    document.querySelector('#windguru').style.display = "none";
    document.querySelector('#overlay').style.display = "flex";
    document.querySelector('.big-loader').style.display = "block";
        
    setTimeout(() => {
        window.location.href = "https://github.com/lMuzal"
    }, 3000);
}

// GALLERY 1

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

galleryCont1.addEventListener("click", galleryEnter1);

function galleryEnter1(){
    document.querySelector('#gallery-two').style.display = "none";
    document.querySelector('#windguru').style.display = "none";
    document.querySelector('#overlay').style.display = "flex";
    document.querySelector('#gallery-one').style.display = "flex";
}

// GALLERY 2

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display = "block";
}

galleryCont2.addEventListener("click", galleryEnter2);

function galleryEnter2(){

    document.querySelector('#gallery-one').style.display = "none";
    document.querySelector('#windguru').style.display = "none";
    document.querySelector('#overlay').style.display = "flex";
    document.querySelector('#gallery-two').style.display = "flex";
}
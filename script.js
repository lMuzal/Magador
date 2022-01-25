document.getElementById('weather1');

function getWeather(){
    console.log("click");
    fetch('https://api.openweathermap.org/data/2.5/weather?id=3081752&units=metric&appid=f28daf2b4eff18717de60ab192054540&lang=pl')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            document.getElementById('weather1').innerHTML = data.main.temp;
        })
}

// napisałem z 427543897 komentarzy dla liskqa

let klucz = "tutaj sobie wloz klucze do auta"; // zdefiniuj klucz
let trains = window.location.href; // zdobądź adres strony
let reseee = trains.split("name=") // zdobądź miejscowość z adresu strony
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + reseee[1] + '&appid=' + klucz)  // ukradnij dane z openweathermap 
    .then(function (resp) { return resp.json() }) // konwert tu dżejson
    .then(function (data) { // prześlij dane do rysowania
        console.log(data);
        drawWeather(data)
    })
    .catch(function () {
        // złap wszystkie errory
    });
function drawWeather(d) {
    var polskanazwadlaliskqa = Math.round(parseFloat(d.main.temp) - 273.15); // temperature parsujemy

    document.getElementById('description').innerHTML = d.weather[0].description; // ustawiamy opis, czyli np. partly cloudy
    document.getElementById('temp').innerHTML = polskanazwadlaliskqa + '&deg;'; // dajemy temperature
    document.getElementById('location').innerHTML = d.name + ', ' + d.sys.country; // lokalizacje dajemy
    document.getElementById('wind').innerHTML = d.wind.speed + 'm/s wind'; // dajemy szybkośc wiatru
    document.getElementById('winddirect').innerHTML = d.wind.deg + '&deg;'
    document.getElementById('arow').style = `transform: rotate(${d.wind.deg}deg); width: 5%`
    document.getElementById('feels').innerHTML = 'feels like ' + temperowka(d.main.feels_like) + '&deg;'; // dajemy feels like zapomniałem jak to sie nazywa po polku
    if (d.weather[0].main == "Clouds") { // ustawiamy tło
        document.getElementById("habodi").style.backgroundImage = "url('lightcloud.jpg')"
        setWelcome();
    }
    else if (d.weather[0].main == "Clear") {
        document.getElementById("habodi").style.backgroundImage = "url('clear.jpg')"
        setWelcome();
    }
    else if (d.weather[0].main == "Rain") {
        document.getElementById("habodi").style.backgroundImage = "url('rain.jpg')"
        setWelcome();
    }
}
function temperowka(halue) { // temperówka do konwenterowania feels like
    halue = parseFloat(halue);
    halue = halue - 273.15
    halue = Math.round((halue + Number.EPSILON) * 100) / 100
    return halue;
}
function setWelcome() {
    console.log("setWelcome")
    let kukulka = new Date();
    let ni = kukulka.getHours();
    if (ni < 10) {
        document.getElementById("welcome").innerText = "Good morning!"
    }
    else if (ni < 16) {
        document.getElementById("welcome").innerText = "Good afternoon!"
    }
    else if (ni < 21) {
        document.getElementById("welcome").innerText = "Good evening!"
    }
    else {
        document.getElementById("welcome").innerText = "Good night!"
    }
}
var searchBtn = $('#search-btn');
var citysBtn = $('#btns');



searchBtn.click(function go(){
 var city = $('#city-search').val();   
var url = "http://api.openweathermap.org/geo/1.0/direct?q= "+ city + "&limit=1&appid=78da9311b6649705d4159cf6966655ff"



fetch(url)
.then(response => response.json())
.then(data => {
 var {lat, lon } = data[0]
 var latValue = lat;
 var lonValue = lon;
 var weather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latValue + "&lon=" + lonValue + "&units=imperial&cnt=6&appid=78da9311b6649705d4159cf6966655ff"
fetch(weather)
.then(response => response.json())
.then(data => { console.log(data);
    var cityName = data.city.name
    var temperature = data.list[0].main.temp;
    var windspeed = data.list[0].wind.speed;
    var humidity = data.list[0].main.humidity;


    console.log(temperature , cityName , windspeed , humidity);
    
var pastCityBtn = $("<button>").text(city)
citysBtn.append(pastCityBtn)
pastCityBtn.click(() => weatherbtn(latValue, lonValue))
})
})
})

function weatherbtn(lat, lon){
    var weather = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=78da9311b6649705d4159cf6966655ff";
    fetch(weather)
    .then((response => response.json()))
    .then(data => {
        console.log(data)
    })
}


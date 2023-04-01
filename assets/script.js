var searchBtn = $('#search-btn');
var citysBtn = $('#btns');
var nameData = $('#nameofcity')
var windData = $('#windspeedofcity')
var tempData = $('#tempofcity')
var humidData = $('#humidityofcity')
var iconData = $('#icons')
var forecast = $('#forecast')


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
.then(data => { //console.log(data);
    forecast.empty()
    for (var i = 1; i <= 5; i++){
    var icon = data.list[i].weather[0].icon;
    var cityName = data.city.name
    var temperature = data.list[i].main.temp;
    var windspeed = data.list[i].wind.speed;
    var humidity = data.list[i].main.humidity;
    var h3 = $('<h3>').text(cityName)
    var p1 = $('<p>').text(temperature)
    var p2 = $('<p>').text(windspeed)
    var p3 = $('<p>').text(humidity)
    var img = $('<img>').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
    var div = $('<div>').addClass("forecast-day").append(h3, img, p1, p2, p3)
    forecast.append(div)





iconData.attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
nameData.text(cityName)
tempData.text(temperature)
windData.text(windspeed)
humidData.text(humidity)

    }

    //console.log(temperature , cityName , windspeed , humidity, icon);



    
var pastCityBtn = $("<button>").text(city)
citysBtn.append(pastCityBtn)
pastCityBtn.click(() => weatherbtn(latValue, lonValue))
})
})
})


function weatherbtn(lat, lon){
    var weather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&cnt=6&appid=78da9311b6649705d4159cf6966655ff"
    fetch(weather)
    .then((response => response.json()))
    .then(data => {
        forecast.empty()
        for (var i = 1; i <= 5; i++){
        var icon = data.list[i].weather[0].icon;
        var cityName = data.city.name
        var temperature = data.list[i].main.temp;
        var windspeed = data.list[i].wind.speed;
        var humidity = data.list[i].main.humidity;
        var h3 = $('<h3>').text(cityName)
        var p1 = $('<p>').text(temperature)
        var p2 = $('<p>').text(windspeed)
        var p3 = $('<p>').text(humidity)
        var img = $('<img>').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
        var div = $('<div>').addClass("forecast-day").append(h3, img, p1, p2, p3)
        forecast.append(div)
    
    
    
    
    
    iconData.attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
    nameData.text(cityName)
    tempData.text(temperature)
    windData.text(windspeed)
    humidData.text(humidity)
    
        }

    })
}


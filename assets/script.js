// these are my global variables
var searchBtn = $('#search-btn');
var citysBtn = $('#btns');
var nameData = $('#nameofcity')
var windData = $('#windspeedofcity')
var tempData = $('#tempofcity')
var humidData = $('#humidityofcity')
var iconData = $('#icons')
var forecast = $('#forecast')
var currentDate = dayjs()
var date = currentDate.format('M/DD/YY')
var h4 = $('<h4>').text(date) 



var cityData = JSON.parse(localStorage.getItem('citydata')) || {};
for (var key in cityData) {
  var city = cityData[key].name;
  var button = $('<button>').text(city);
  citysBtn.append(button);

}




var history = {

}
//when the submit button is clicked will call the go function
searchBtn.click(function go(){
 var city = $('#city-search').val();   
var url = "http://api.openweathermap.org/geo/1.0/direct?q= "+ city + "&limit=1&appid=78da9311b6649705d4159cf6966655ff"


//uses the api to grab lat and lon values that are typed in city to get var weather to bring back wheather data
fetch(url)
.then(response => response.json())
.then(data => {
 var {lat, lon } = data[0]
 var latValue = lat;
 var lonValue = lon;
 var weather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latValue + "&lon=" + lonValue + "&units=imperial&cnt=6&appid=78da9311b6649705d4159cf6966655ff"
fetch(weather)
.then(response => response.json())
.then(data => { 
    
    forecast.empty()
    for (var i = 1; i <= 5; i++){
        // loops through the 5 days of weather data to create a 5 day forecast and creates elements for the data to be displayed
    var icon = data.list[i].weather[0].icon;
    var cityName = data.city.name
    var temperature = data.list[i].main.temp;
    var windspeed = data.list[i].wind.speed;
    var humidity = data.list[i].main.humidity;
    currentDate = currentDate.add(1, 'day' )
    var h3 = $('<h3>').text(currentDate.format('M/DD/YY'))
    var p1 = $('<p>').text('Temp: '+ temperature)
    var p2 = $('<p>').text('Windspeed: '+windspeed+' MPH')
    var p3 = $('<p>').text('Humidity: '+humidity+'%')
    var img = $('<img>').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
    var div = $('<div>').addClass("forecast-day").append(h3, img, p1, p2, p3)
    forecast.append(div)


// current weather information that will be displayed
iconData.attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
nameData.text(cityName)
tempData.text('Temp: '+ temperature)
windData.text('Windspeed: '+windspeed+' MPH')
humidData.text('Humidity: '+humidity+'%')

nameData.append(h4)

}




//buttons that are created when a city is typed
var pastCityBtn = $("<button>").text(city)
citysBtn.append(pastCityBtn)
// saves the name of the city that is typed into an arry in local storage
cityData[cityName] = { name: cityName };
localStorage.setItem('citydata', JSON.stringify(cityData));

pastCityBtn.click(() => weatherbtn(latValue, lonValue))
})
.catch(error => {
    console.error('Error: ', error)})
})
})

// new buttons that are created when clicked will call this function that will display weather info for that city
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
        currentDate = currentDate.add(1, 'day' )
        var h3 = $('<h3>').text(currentDate.format('M/DD/YY'))
        var p1 = $('<p>').text('Temp: '+ temperature)
        var p2 = $('<p>').text('Windspeed: '+windspeed+' MPH')
        var p3 = $('<p>').text('Humidity: '+humidity+'%')
        var img = $('<img>').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
        var div = $('<div>').addClass("forecast-day").append(h3, img, p1, p2, p3)
        forecast.append(div)
    
    
    
    
    
    iconData.attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
    nameData.text(cityName)
    tempData.text('Temp: '+ temperature)
    windData.text('Windspeed: '+windspeed+' MPH')
    humidData.text('Humidity: '+humidity+'%')
    
        }

    })
}


var button = $('button');
// buttons that are created due to local storage when pressed will activate this function that will display the weather information for that city
button.click(function recall() {
 var recallName = $(this).text()
 var recallUrl = "http://api.openweathermap.org/geo/1.0/direct?q= "+ recallName + "&limit=1&appid=78da9311b6649705d4159cf6966655ff"
 fetch(recallUrl)
.then(response => response.json())
.then(data => {
 var {lat, lon } = data[0]
 var latValue = lat;
 var lonValue = lon;
 var weather = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latValue + "&lon=" + lonValue + "&units=imperial&cnt=6&appid=78da9311b6649705d4159cf6966655ff"
fetch(weather)
.then(response => response.json())
.then(data => { 
    forecast.empty()
    for (var i = 1; i <= 5; i++){
    var icon = data.list[i].weather[0].icon;
    var cityName = data.city.name
    var temperature = data.list[i].main.temp;
    var windspeed = data.list[i].wind.speed;
    var humidity = data.list[i].main.humidity;
    currentDate = currentDate.add(1, 'day' )
    var h3 = $('<h3>').text(currentDate.format('M/DD/YY'))
    var p1 = $('<p>').text('Temp: '+ temperature)
    var p2 = $('<p>').text('Windspeed: '+windspeed+' MPH')
    var p3 = $('<p>').text('Humidity: '+humidity+'%')
    var img = $('<img>').attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
    var div = $('<div>').addClass("forecast-day").append(h3, img, p1, p2, p3)
    forecast.append(div)



iconData.attr("src", "http://openweathermap.org/img/wn/" + icon + ".png");
nameData.text(cityName)
tempData.text('Temp: '+ temperature)
windData.text('Windspeed: '+windspeed+' MPH')
humidData.text('Humidity: '+humidity+'%')

nameData.append(h4)

}

})
})})
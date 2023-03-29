var searchBtn = $('#search-btn');
var citysBtn = $('#btns');



searchBtn.click(function go(){
 var city = $('#city-search').val();   
var url = "http://api.openweathermap.org/geo/1.0/direct?q= "+ city + "&limit=1&appid=78da9311b6649705d4159cf6966655ff"
newBtn= $("<button>").text(city);
citysBtn.append(newBtn);

fetch(url)
.then(response => response.json())
.then(data => {
 var {lat, lon } = data[0]
 var latValue = lat;
 var lonValue = lon;
    console.log(latValue, lonValue);
})

})
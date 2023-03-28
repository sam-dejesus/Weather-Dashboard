var searchBtn = $('#search-btn');
var citys = $('#btns');

searchBtn.click(function go(){
var searchValue = $('#city-search').val();

newBtn= $("<button>").text(searchValue);
citys.append(newBtn);


})
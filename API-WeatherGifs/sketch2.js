var forecast;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=da5ae27bbd372bceb11140fea208410a';
var city;

var apiGiphy = 'http://api.giphy.com/v1/gifs/random?';
var apiKeyGiphy = 'api_key=dc6zaTOxFJmzC&tag=';
var keyword;

function setup(){
  // createCanvas(400,600);
  var current = 'http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&APPID=da5ae27bbd372bceb11140fea208410a'
  loadJSON(current, gotData);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  city = select('#city');
}

function weatherAsk(){
  var url = api + city.value() + apiKey;
  loadJSON(url, gotData);
}

// passes in weather data and returns forecast
function gotData(data){
  if (data) {
    forecast = data.weather[0].main;
    createP(forecast);
    keyword = forecast;
    console.log(keyword);
    searchGif();
  }
}


function searchGif(){
  var url = apiGiphy + apiKeyGiphy + keyword;
  console.log(url);
  loadJSON(url, loadGif);
}

function loadGif(gif){
  if (gif) {
    var imageURL = gif.data.image_url;
    console.log(imageURL);
    // document.getElementById("status").innerHTML = city.value() + ": " + keyword;
    // document.getElementById('image').src = imageURL;
    createImg(imageURL);

    // for (var i = 0; i < gif.data.length; i++) {
    //   var imageURL = gif.data[i].images.fixed_height.url;
    //   createImg(imageURL);
    // };
  }
}
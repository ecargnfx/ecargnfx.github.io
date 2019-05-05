
var apiGiphy = 'http://api.giphy.com/v1/gifs/search?q=';
var apiKeyGiphy = '&api_key=dc6zaTOxFJmzC';
var keyword;

function setup(){
  var button = select('#submit');
  button.mousePressed(searchGif);

  keyword = forecast;
}

function searchGif(){
  var url = api + keyword.value() + apiKey;
  loadJSON(url, loadGif);
}

function loadGif(gif){
  if (gif) {
    // var imageURL = gif.data[0].images.fixed_height.url;
    // console.log(imageURL);
    // document.getElementById('image').src = imageURL;
    // createImg(imageURL);
    // var showGif = document.getElementById("image");
    // showGif.src = imageURL;

    for (var i = 0; i < gif.data.length; i++) {
      var imageURL = gif.data[i].images.fixed_height.url;
      createImg(imageURL);
    };
  }
}

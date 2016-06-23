var song;
var amp;


function preload(){
  song = loadSound('assets/signal.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight); 
  background(72,61,139);  

  song.play();
  song = new p5.AudioIn();

}

function draw() {

  var volume = song.getLevel(); 
  var diam = map(volume, 0, .3, 0, 100);
  var y = map(volume, 0, .3, 0, -300);
  var y2 = map(volume, 0, 1, 0, -500);
  var y3 = map(volume, 0, .3, 0, 300);
  var y4 = map(volume, 0, 1, 0, 500);
  var col = map(volume, 0, 1, 0, 255);
  


  circle();

function circle(){
  fill(255,random(0,255),random(0,255),80);
  ellipse(mouseX,mouseY,diam,diam);
  }  
}



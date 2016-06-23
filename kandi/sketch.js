var song;
var amp;

// loads first
function preload(){
  song = loadSound('assets/signal.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  background(72,61,139);  
  
  //Creates Audio
  song.play();
  song = new p5.AudioIn();

  
  //init amplitude, needs an input to know where sound is coming from (from mic variable)
  // amp = new p5.Amplitude();
  // amp.setInput(song);
}

function draw() {


  //amplitude level to map to diam
  var volume = song.getLevel(); // print(volume); used for debugging sound
  var diam = map(volume, 0, .3, 0, 100);
  var y = map(volume, 0, .3, 0, -300);
  var y2 = map(volume, 0, 1, 0, -500);
  var y3 = map(volume, 0, .3, 0, 300);
  var y4 = map(volume, 0, 1, 0, 500);
  var col = map(volume, 0, 1, 0, 255);
  
/*  
  fill(139,col,139);
  rect(width/2, height, 100, y);
  
  fill(255,215,col);
  rect(width/2 - 100, height, 100, y2);
  
  fill(255,99,col);
  rect(width/2 - 100, 0, 100, y3);
  
  fill(255,col,col);
  rect(width/2, 0, 100, y4);
*/

  // fill(255,215,col);
  // noStroke();
  // ellipse(width/2,height/2,diam,diam)


  circle();

function circle(){
  fill(255,random(0,255),random(0,255),80);
  // noStroke();  
  ellipse(mouseX,mouseY,diam,diam);
  // triangle(mouseX + diam, mouseY + diam, 0, 0, 75, 75);
  }  
}



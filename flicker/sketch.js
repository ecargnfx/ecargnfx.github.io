var song;
var amp;
var circle = [];


function preload(){
  song = loadSound('assets/flicker.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight); 


  song.play();
  song = new p5.AudioIn();

}

function draw() {
  background(72,61,139);  
  var volume = song.getLevel(); 
  var diam = map(volume, 0, .3, 0, 100);
  var col = map(volume, 0, 1, 0, 255);
  
  circle.push(new Circle(mouseX,mouseY, diam));
  
  for(var i = 0; i<circle.length; i++){
    circle[i].update();
    circle[i].display();
    if (circle[i].y > height){
      circle.splice(i,1);
    }
  }
  
  

function Circle(x, y, diam){
  this.x = x;
  this.y = y;
  this.speed = 4;
  this.diam = diam;
  
  
  this.update = function(){
    this.y = this.y - this.speed;
    this.diam = this.diam + 2;
  }
  
  this.display = function(){
    fill(255,random(0,255),random(0,255),80);
    ellipse(this.x,this.y,this.diam, this.diam);
  }
  

  
  }  
}

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(0.5, 1.5);
  }

  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -100;
      this.y = random(50, height / 2);
      this.speed = random(0.5, 1.5);
    }
  }

  display() {
    fill(255);
    noStroke();

    // Draw the cloud using ellipse shapes
    ellipse(this.x + 25, this.y, 50, 50);
    ellipse(this.x + 50, this.y + 25, 50, 50);
    ellipse(this.x, this.y + 25, 50, 50);
    ellipse(this.x + 25, this.y + 50, 50, 50);
  }
}

let clouds = [];

class Bunny {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    // Pink bunny color
    fill(255, 102, 204);

    // Body
    ellipse(this.x, this.y + 120, 120, 150);

    // Head
    ellipse(this.x, this.y, 100, 100);

    // Ears
    ellipse(this.x - 35, this.y - 75, 30, 80);
    ellipse(this.x + 35, this.y - 75, 30, 80);

    // Eyes
    // fill(0);


    // Nose
    fill(255, 0, 0);
    ellipse(this.x, this.y + 10, 10, 10);

    // Mouth
    noFill();
    arc(this.x - 15, this.y + 25, 30, 10, 0, PI);
    arc(this.x + 15, this.y + 25, 30, 10, 0, PI);

    // Legs
    fill(255, 102, 204);
    ellipse(this.x - 40, this.y + 190, 30, 80);
    ellipse(this.x + 40, this.y + 190, 30, 80);

    // Left arm
    push();
    translate(this.x - 70, this.y + 120);
    rotate(radians(30));
    ellipse(0, 0, 30, 80);
    pop();

    // Right arm
    push();
    translate(this.x + 70, this.y + 120);
    rotate(radians(-30));
    ellipse(0, 0, 30, 80);
    pop();
    
    // Calculate the angle between the eye position and the mouse position
    let leftEyeAngle = atan2(mouseY - (this.y - 45), mouseX - (this.x - 20)); // Adjusted Y-coordinate
    let rightEyeAngle = atan2(mouseY - (this.y - 45), mouseX - (this.x + 20)); // Adjusted Y-coordinate

    // Calculate the new eye pupil positions based on the angle
    let leftPupilX = this.x - 20 + cos(leftEyeAngle) * 5;
    let leftPupilY = this.y - 45 + sin(leftEyeAngle) * 5; // Adjusted Y-coordinate
    let rightPupilX = this.x + 20 + cos(rightEyeAngle) * 5;
    let rightPupilY = this.y - 45 + sin(rightEyeAngle) * 5; // Adjusted Y-coordinate

    // Draw the eye pupils
    fill(0);
    ellipse(leftPupilX, leftPupilY + 40, 10, 10);
    ellipse(rightPupilX, rightPupilY + 40, 10, 10);   
  }
}


class Egg {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.bounceSpeed = 0.05;
    this.bounceHeight = 3;
    this.angle = random(TWO_PI);
  }

  move() {
    this.angle += this.bounceSpeed;
    this.y += sin(this.angle) * this.bounceHeight;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, 30, 40);
  }

  click() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 20) {
      return true;
    } else {
      return false;
    }
  }  
}

let confetti = [];

class Confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(3, 6);
    this.color = color(random(150, 255), random(150, 255), random(150, 255), 255); // Generate random bright neon pastel colors
    this.vx = random(-2, 2);
    this.vy = random(-4, -1);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.1;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}


let bunny;
let eggs = [];
let pastelColors = [
  '#FFB5E8',
  '#FF9CEE',
  '#FEC8D8',
  '#D291BC',
  '#957DAD',
  '#DFFF00',
  '#FFD700',
  '#E0BBE4',
  '#D0E1F9',
  '#B4F8C8'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bunny = new Bunny(width / 2, height / 2 + 90); // Adjusted Y-coordinate for the bunny

  for (let i = 0; i < 10; i++) {
    let angle = map(i, 0, 10, 0, TWO_PI);
    let eggX = width / 2 + cos(angle) * 150;
    let eggY = height / 2 + 50 + sin(angle) * 150; // Adjusted Y-coordinate for the eggs
    let eggColor = pastelColors[i % pastelColors.length];
    eggs.push(new Egg(eggX, eggY, eggColor));
  }
  
  // Create clouds
  for (let i = 0; i < 5; i++) {
    clouds.push(new Cloud(random(-100, width), random(50, height / 2)));
  }  
}

function resetCanvas() {
  bunny = new Bunny(width / 2, height - 200);

  eggs = [];
  for (let i = 0; i < 10; i++) {
    eggs.push(new Egg(random(width), random(height - 200, height - 100), random(20, 50), random(20, 50)));
  }
}

function draw() {
  background(137, 207, 240); // Baby blue background
  
  // Update and display clouds
  for (let cloud of clouds) {
    cloud.move();
    cloud.display();
  }  

  // bunny.move();
  bunny.display();

  for (let i = eggs.length - 1; i >= 0; i--) {
    let egg = eggs[i];
    egg.move();
    egg.display();
    if (egg.click()) {
      for (let j = 0; j < 50; j++) {
        confetti.push(new Confetti(egg.x, egg.y));
      }
      eggs.splice(i, 1);
    }
  }

  for (let i = confetti.length - 1; i >= 0; i--) {
    let particle = confetti[i];
    particle.move();
    particle.display();
    if (particle.y > height) {
      confetti.splice(i, 1);
    }
  }

  // Draw green grass at the bottom
  fill(0, 200, 0);
  rect(0, height - 50, width, 50);
  
  // Check if all eggs have disappeared
  if (eggs.length === 0) {
    // Display reset button
    fill(255);
    rect(width / 2 - 50, height / 2 - 25, 100, 50, 10);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Restart", width / 2, height / 2);
  }  
}

function mousePressed() {
  // Check if reset button is visible and clicked
  if (eggs.length === 0 && mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50 && mouseY >= height / 2 - 25 && mouseY <= height / 2 + 25) {
    resetCanvas();
  }
}

function mouseClicked() {
  for (let i = eggs.length - 1; i >= 0; i--) {
    if (eggs[i].click()) {
      eggs.splice(i, 1);
    }
  }
}
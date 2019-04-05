// State Variables Assignment
// Al Rasid Mamun
// March 25, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, speedX, speedY;
let rectSize;
let gravity;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 372.9; 
  speedX = 0; 
  speedY = 0;
  rectSize = 50;
  gravity = 0.2;
}

function draw() { 
  background(220);
  rectMode(CENTER);

  // if (key === " ") { 
  //   y += speedY;
  //   speedY += gravity; 
  // }
  // if (y >= height) {
  //   speedY *= -1; 
  // }
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 2;
  }
 
  if (keyIsDown(UP_ARROW)) {
    y -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 2;
  }

  rect(x, y, rectSize, rectSize);

}

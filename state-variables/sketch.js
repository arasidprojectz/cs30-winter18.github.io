// State Variables Assignment
// Al Rasid Mamun
// March 25, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, rectSize, speedX, speedY;

function setup() {
  createCanvas(400, 400);
  x = widht/2;
  y = height/2; 
  rectSize = 32;
  speedX = 0; 
  speedY = 0;
  
}

function draw() { 
  background(220);
  rect(x, y, rectSize, rectSize);
}

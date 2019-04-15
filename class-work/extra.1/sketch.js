let x;
let y;
let w; 
let h;
let g; 
let connected;
let speedX; 
let speedY;


function setup() {
  createCanvas(400, 400);
  x = 100;
  y = 100;
  w = 32;
  h = 32; 
  g = 0.6;
  speedX = 5; 
  speedY = 5;
  connected = false; 
}

function draw() {
  background(220);
  rect(x, y, w, h);
  // land(100);
  if ((key === " ") && connected === true) {
    speedY = -15;
    connected = false;
  }
  if (connected === false) {
    speedY += g;
  }  
  if (y > height) {
    y = 0;
    speedY = 0;
  }  
  y += speedY;
}

// function land(desY) {
//   speedY = 0;
//   conncted = true;
//   y = desY - h;
// }
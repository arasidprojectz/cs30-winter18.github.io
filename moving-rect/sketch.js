// Moving Rectangle
// State Variables Demo

let x, y;
let squareSize;
let state;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 30; 
  state = 1;
  speed = 5;
}

function draw() {
  background(220);
  // detemineState(); 
  // moveAccordingTOState();
  dispalySquare();
}

function dispalySquare() {
  fill(0); 
  rect(x, y, squareSize. squareSize);
}

function detemineState() {
  if (state === 1 && x >= width - squareSize) {
    state = 2;
    x = width - squareSize; // Hug the right hand wall
  }
  else if (state === 2 && y >= height - squareSize) {
    state = 3;
    y = height - squareSize;
  }
  else if (state === 3 && x <= 0) {
    state = 4;
    x = 0;
  }
  else if (state === 4 && y <= 0) {
    state = 1;
    y = 0;
  }
}
function moveAccordingTOState() {
  if (state === 1) {
    x += speed;
  }
  else if (state == 2) { 
    y += speed;
  }
  else if (state === 3) {
    x -= speed;
  }
  else if (state === 4) {
    y -= speed;
  }
}
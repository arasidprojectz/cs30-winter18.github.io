// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y, imgWidth, imgHeight;
let xSpeed, ySpeed;
let imgEM;
let imgScale;
let state;

function preload() {
  imgEM = loadImage("assets/elon-musk-face-cut-out.png")
  imgScale = 0.1;
  state = 0;
  imgWidth = imgEM.width * imgScale; 
  imgHeight = imgEM.height * imgScale;
  x = 0, y = 0;
  xSpeed = 5, xSpeed = 5;
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  changeState();
}

function bounceingImg() {
  if (x + imgWidth >= width || x <= 0) {
    dx = -1 * dx;
  }
  if (y + imgHeight >= height || y <= 0) {
    dy = -1 * dy;
  }
}

function changeState() {

}
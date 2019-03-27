// Perlin Noise Demo

let time;
let rectWidth;
let numberOfRects;
let myRectangle;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  time = 0;
  rectWidth = width/numberOfRects;
  generateInitialTerrain();
}

function generateInitialTerrain() {
  for (let i = 0, i < numberOfRects; i ++) {
    let rectHeight = noise(time) * height;
    let myRectangle = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight,
  }
  rects.push(myRectangle); 
  //move along the perlin noise x-axis
  time += 0.1;
  
}

function draw() {
  background(220);

  time += 0.01; 
  fill(0);
  for (let i = 0; i < numberOfRects; i ++) {
    rect(rect[i].x, rect[i].y, rect[i].width, rect[i].height);

  }
}

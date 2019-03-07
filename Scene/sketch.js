// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// Add music, try to make a mouse cursor"

let bgImage, HatImg, appleImg, bananaImg, strawberryImg, pineappleImg, grapeImg;
let scaleHat, scaleApple, scalePineapple, scaleStrawberry, scaleBanana, scaleGrape;
let appleX, bananaX, pineappleX, grapeX, strawberryX; 
let posX, posY, imgY, imgWidth, xSpeed;

function setup() {
  bgImage = loadImage("assets/forestbackground.jpg")
  createCanvas(900, 700); 
  scaleHat = 0.09, scaleApple = 0.02, scaleBanana = 0.015;
  scaleGrape = 0.12, scalePineapple = 0.1, scaleStrawberry = 0.06;
  appleX = random(0, width), bananaX = random(0, width);
  pineappleX = random(0, width), grapeX = random(0, width), strawberryX = random(0, width);
  posX = 350, posY = 520, imgY = 0, imgWidth = 100, xSpeed = 5;
}

function draw() {
  background(bgImage);
  displayHat();
  moveHat();
  createCursor();
  leftToRightBoundary();
  displayFruits();
  moveFruit();
} 

// Resizing the window
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight); 


//Display the hat on the screen
function displayHat() { 
  image(HatImg, posX, posY, HatImg.width * scaleHat, HatImg.height * scaleHat);
} 

// Move hat wiht key control
function moveHat() {
  if (keyIsDown(LEFT_ARROW)) {
    posX -= xSpeed; 
  }
  if (keyIsDown(RIGHT_ARROW)) { 
    posX += xSpeed;
  }
}

function leftToRightBoundary() {
  if (posX + imgWidth === width || posX === 0) {
    xSpeed = xSpeed * -1;
  } 
}

function interaactingObject() {

}
//Make the coustum mouse cursor move with mouse control
function mouseDragged() { 
  if (mouseX < posX) { 
    posX -= Math.abs(mouseX - posX); 
  }
  else if (mouseX - posX) {
    posX += Math.abs(mouseX - posX);
  }
}

// Display the fruits images
function displayFruits() {
  for (let i = 0; i < 15; i++) {
    image(appleImg, appleX, imgY, appleImg.width * scaleApple, appleImg.height * scaleApple);
  }
  for (let i = 0; i < 5; i++) {
    image(bananaImg, bananaX, imgY, bananaImg.width * scaleBanana, bananaImg.height * scaleBanana);
  }
  for (let i = 0; i < 20; i++) {
    image(strawberryImg, strawberryX, imgY, strawberryImg.width * scaleStrawberry, strawberryImg.height * scaleStrawberry);
  }
  for (let i = 0; i < 25; i++) {
    image(pineappleImg, pineappleX, imgY, pineappleImg.width * scalePineapple, pineappleImg.height * scalePineapple);
  }
  for (let i = 0; i < 25; i++) {
    image(grapeImg, grapeX, imgY, grapeImg.width * scaleGrape, grapeImg.height * scaleGrape);
  }
}

// Make fruits fall down randomly from the top of the screen
function moveFruit() {
  imgY += 1;
}

function preload() { 
  HatImg = loadImage("assets/hat.png"), appleImg = loadImage("assets/appleclipart.png");
  bananaImg = loadImage("assets/bananaclipart.png"), strawberryImg = loadImage("assets/strawberryclipart.png");
  pineappleImg = loadImage("assets/pineappleclipart.png"), grapeImg = loadImage("assets/grapeclipart.png");
}

function createCursor() {
  fill(51,204,204); 
  stroke("grey");
  strokeWeight(6);
  beginShape();
  vertex(-5 + mouseX, 40 + mouseY);
  vertex(-5 + mouseX, -5 + mouseY);
  vertex(30 + mouseX, 25 + mouseY);
  vertex(10 + mouseX, 25 + mouseY);
  vertex(-5 + mouseX, 40 + mouseY);
  endShape();
}

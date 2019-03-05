// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// Add music, try to make a mouse cursor"

let bgImage;
let appleImg;
let bananaImg; 
let strawberryImg;
let pineappleImg;
let grapeImg;

let scaleHat; 
let scaleApple;
let scalePineapple;
let scaleStrawberry; 
let scaleBanana; 
let scaleGrape;

let posX; 
let posY; 
let HatImg;

let imgY;
let x;
let y;


function setup() {
  bgImage = loadImage("assets/forestbackground.jpg")
  createCanvas(900, 700); 
  scaleHat = 0.09;
  scaleApple = 0.02;
  scaleBanana = 0.015;
  scaleGrape = 0.12;
  scalePineapple = 0.1;
  scaleStrawberry = 0.06;
  posX = 350;
  posY = 520;
  imgY = 0;
  x = random(width);
}

function draw() {
  background(bgImage);
  displayHat();
  moveHat();
  createCursor();
  displayFruits();
  // moveFruit();
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
    posX -= 5; 
  }
  if (keyIsDown(RIGHT_ARROW)) { 
    posX += 5;
  }
}

// Make the coustum mouse cursor move with mouse control
// function mouseDragged() { 
//   if (mouseX < posX) { 
//     posX -= Math.abs(mouseX - posX); 
//   }
//   else if (mouseX - posX) {
//     posX += Math.abs(mouseX - posX);
//   }
// }

// Display the fruits images
function displayFruits() {
  for (let a = 0; a < 15; a++) {
    image(appleImg, x, imgY, appleImg.width * scaleApple, appleImg.height * scaleApple);
  }
  for (let b = 0; b < 5; b++) {
    image(bananaImg, x, imgY, bananaImg.width * scaleBanana, bananaImg.height * scaleBanana);
  }
  for (let s = 0; s < 20; s++) {
    image(strawberryImg, x, imgY, strawberryImg.width * scaleStrawberry, strawberryImg.height * scaleStrawberry);
  }
  for (let p = 0; p < 25; p++) {
    image(pineappleImg, x, imgY, pineappleImg.width * scalePineapple, pineappleImg.height * scalePineapple);
  }
  for (let g = 0; g < 25; g++) {
    image(grapeImg, x, imgY, grapeImg.width * scaleGrape, grapeImg.height * scaleGrape);
  }
}

// Make fruits fall down randomly from the top of the screen
function moveFruit() {
  imgY += 1;
 

}

function preload() { 
  HatImg = loadImage("assets/hat.png");
  appleImg = loadImage("assets/appleclipart.png");
  bananaImg = loadImage("assets/bananaclipart.png");
  strawberryImg = loadImage("assets/strawberryclipart.png");
  pineappleImg = loadImage("assets/pineappleclipart.png");
  grapeImg = loadImage("assets/grapeclipart.png");
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

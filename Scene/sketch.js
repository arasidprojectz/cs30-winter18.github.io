// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// Add music, try to make a mouse cursor"

let bgImage;
let posX; 
let posY; 
let scaleHat; 
let scaleFruit;
let HatImg;
let appleImg;
let imgY = 0;


function setup() {
  bgImage = loadImage("assets/forestbackground.jpg")
  createCanvas(900, 700); 
  scaleHat = 0.09;
  scaleFruit = 0.02;
  posX = 350;
  posY = 520;
}

function draw() {
  background(bgImage);
  displayHat();
  moveHat();
  createCursor();
  // displayFruits();
  // moveFruit();
} 

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
  image(appleImg, 0, imgY, appleImg.width * scaleFruit, appleImg.height * scaleFruit);
}

// Make fruits fall from the top of the screen
function moveFruit() {
  imgY += 1;
}

function preload() { 
  HatImg = loadImage("assets/hat.png");
  appleImg = loadImage("assets/apple.png");
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

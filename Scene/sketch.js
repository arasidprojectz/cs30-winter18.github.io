// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// Add music, try to make a mouse cursor

let bgImage, basketImg, appleImg, bananaImg, strawberryImg, pineappleImg, grapeImg, scoreButtonImg, gamePoint;
let basketSize, appleSize, bananaSize, pineappleSize, grapeSize, strawberryWidth, strawberryHeight, scoreButtonWidth, scoreButtonHeight;
let appleX, bananaX, pineappleX, grapeX, strawberryX; 
let appleY, bananaY, pineappleY, grapeY, strawberryY;
let posX, posY, cursorX, cursorY, xSpeed, hit;

function setup() {
  bgImage = loadImage("assets/forestbackground.jpg");
  createCanvas(900, 700); 
  basketSize = 90, appleSize = 35, bananaSize = 50, grapeSize = 45, pineappleSize = 60, strawberryWidth = 30, strawberryHeight = 35, scoreButtonWidth = 100, scoreButtonHeight = 50;
  appleX = random(0, width), bananaX = random(5, width), pineappleX = random(10, width), grapeX = random(15, width), strawberryX = random(20, width);
  appleY = 0, bananaY = 0, pineappleY = 0, grapeY = 0, strawberryY = 0;
  posX = 350, posY = 520, cursorX = 100, cursorY = 100, xSpeed = 5, hit = false, gamePoint = 0;
}

function draw() {
  background(bgImage);
  displayHat();
  moveHat();
  createCursor();
  displayFruits();
  moveFruit();
  checkCollide();
  keepGameScore();
  displayScoreButton();
} 

function keepGameScore() {
  let gameScore = "0";
  fill(0);
  noStroke();
  textSize(40);
  textLeading(10); 
  text(gameScore, 860, 40);
}

function pointForApple() {
  let applePoint = "+6";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(applePoint, appleX, appleY);
}

function pointForBanana() {
  let bananaPoint = "+2";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(bananaPoint, bananaX, bananaY);
}

function pointForPineapple() {
  let pineapplePoint = "+10";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(pineapplePoint, pineappleX, pineappleY);
}

function pointForGrape() {
  let grapePoint = "+4";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grapePoint, grapeX, grapeY);
}

function pointForStrawberry() {
  let strawberryPoint = "+8";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(strawberryPoint, strawberryX, strawberryY);
}



function checkCollide() {
  hit = collideRectRect(appleX, appleY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForApple(); 
  }
  hit = collideRectRect(bananaX, bananaY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForBanana();  
  }
  hit = collideRectRect(pineappleX, pineappleY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForPineapple();  
  }
  hit = collideRectRect(grapeX, grapeY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForGrape();  
  }
  hit = collideRectRect(strawberryX, strawberryY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForStrawberry();  
  }
}

//Make the coustum mouse cursor move with mouse control
function myMouseDragged() {
  if (cursorX < posX || cursorX > posX + basketSize || cursorY < posY || cursorY > posY + basketSize) {
    cursorX += mouseX - cursorX;
    cursorY += mouseY - cursorY;
    return;
  }
  
  cursorX += 0.1 * (mouseX - cursorX);

  if (cursorX < posX) {
    posX -= Math.abs(cursorX - posX) + basketSize/2;
  } 
  else if (cursorX > posX) {
    posX += Math.abs(cursorX - posX) - basketSize/2;
  }
  
  cursorX = posX + basketSize/2;
}

function mouseMoved() {
  cursorX = mouseX;
  cursorY = mouseY;
}

function mouseDragged() {
  myMouseDragged();
}

// Move hat wiht key control
function moveHat() {
  if (keyIsDown(LEFT_ARROW) && posX > 0) {
    posX -= xSpeed; 
  }
  if (keyIsDown(RIGHT_ARROW) && posX < 810) { 
    posX += xSpeed;
  }
}

//Display the hat on the screen
function displayHat() { 
  image(basketImg, posX, posY, basketSize, basketSize);
} 

function displayScoreButton() { 
  image(scoreButtonImg, 755, 0, scoreButtonWidth, scoreButtonHeight);
} 


// Display the fruits images
function displayFruits() {
  for (let i = 0; i < 15; i++) {
    image(appleImg, appleX, appleY, appleSize, appleSize);
  }
  for (let i = 0; i < 5; i++) {
    image(bananaImg, bananaX, bananaY, bananaSize, bananaSize);
  }
  for (let i = 0; i < 20; i++) {
    image(strawberryImg, strawberryX, strawberryY, strawberryWidth, strawberryHeight);
  }
  for (let i = 0; i < 25; i++) {
    image(pineappleImg, pineappleX, pineappleY, pineappleSize, pineappleSize);
  }
  for (let i = 0; i < 30; i++) {
    image(grapeImg, grapeX, grapeY, grapeSize, grapeSize);
  }
}

// Make fruits fall down randomly from the top of the screen
function moveFruit() {
  appleY += random(0.5, 1);
  if (appleY > 550) {
    appleY = 0;
    appleX = random(0, width);
  }

  bananaY += random(0.5, 1.5);
  if (bananaY > 550) {
    bananaY = 0;
    bananaX = random(5, width);
  }

  pineappleY += random(0.5, 2);
  if (pineappleY > 550) {
    pineappleY = 0;
    pineappleX = random(10, width);
  }

  grapeY += random(0.5, 2.5);
  if (grapeY > 550) {
    grapeY = 0;
    grapeX = random(15, width);
  }

  strawberryY += random(0.5, 3);
  if (strawberryY > 550) {
    strawberryY = 0;
    strawberryX = random(20, width);
  }
}

function preload() { 
  basketImg = loadImage("assets/basket-clipart.png "), appleImg = loadImage("assets/appleclipart.png");
  bananaImg = loadImage("assets/bananaclipart.png"), strawberryImg = loadImage("assets/strawberryclipart.png");
  pineappleImg = loadImage("assets/pineappleclipart.png"), grapeImg = loadImage("assets/grapeclipart.png");
  scoreButtonImg = loadImage("assets/score-button.png");
}

function createCursor() {
  fill(51,204,204); 
  stroke("grey");
  strokeWeight(6);
  beginShape();
  vertex(0 + mouseX, 40 + mouseY);
  vertex(0 + mouseX, -5 + mouseY);
  vertex(34 + mouseX, 25 + mouseY);
  vertex(15 + mouseX, 25 + mouseY);
  vertex(0 + mouseX, 40 + mouseY);
  endShape();
}

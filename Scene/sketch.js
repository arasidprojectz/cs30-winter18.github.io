// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// Add music, try to make a mouse cursor

let bgImage, basketImg, appleImg, bananaImg, strawberryImg, pineappleImg, grapeImg, scoreButtonImg, grenadeImg, grenadeImg2, nuclearImg;
let basketSize, appleSize, bananaSize, pineappleSize, grapeSize, strawberryWidth, strawberryHeight, scoreButtonWidth, scoreButtonHeight, grenadeSize, grenadeSize2 , nuclearSize;
let appleX, bananaX, pineappleX, grapeX, strawberryX, buttonX, grenadeX, grenadeX2, nuclearX; 
let appleY, bananaY, pineappleY, grapeY, strawberryY, buttonY, grenadeY, grenadeY2, nuclearY;
let posX, posY, cursorX, cursorY, xSpeed, hit, gamePoint;

function setup() {
  bgImage = loadImage("assets/forestbackground.jpg");
  createCanvas(900, 700); 
  basketSize = 90, appleSize = 35, bananaSize = 50, grapeSize = 45, pineappleSize = 60, strawberryWidth = 30, strawberryHeight = 35, scoreButtonWidth = 100, scoreButtonHeight = 50, grenadeSize = 60, grenadeSize = 60, grenadeSize2 = 80, nuclearSize = 70;
  appleX = random(0, 880), bananaX = random(0, 880), pineappleX = random(0, 880), grapeX = random(0, 880), strawberryX = random(0, 880), grenadeX = random(0, 890), grenadeX2 = random(0, 890), nuclearX = random(0, 890), buttonX = 735;
  appleY = 0, bananaY = 0, pineappleY = 0, grapeY = 0, strawberryY = 0, buttonY = 0, grenadeY = 0, grenadeY2 = 0, nuclearY = 0;
  posX = 350, posY = 520, cursorX = 100, cursorY = 100, xSpeed = 5, hit = false, gamePoint = 0;
}

function draw() {
  background(bgImage);
  displayImg();
  moveHat();
  createCursor();
  moveFruit();
  checkCollide();
  keepGameScore();
} 

function keepGameScore() {
  fill(0);
  noStroke();
  textSize(40);
  textLeading(10); 
  text(gamePoint , 830, 40);
}

function pointForGrenade() {
  let grenadePoint = "-15";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grenadePoint, grenadeX, grenadeY);
  gamePoint -= 15;
}

function pointForGrenade2() {
  let grenadePoint2 = "-30";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grenadePoint2, grenadeX2, grenadeY2);
  gamePoint -= 30;
}

function pointForNuclear() {
  let grenadePoint = "-100";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grenadePoint, grenadeX, grenadeY);
  gamePoint -= 100;
}
function pointForApple() {
  let applePoint = "+6";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(applePoint, appleX, appleY);
  gamePoint += 6;
}

function pointForBanana() {
  let bananaPoint = "+2";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(bananaPoint, bananaX, bananaY);
  gamePoint += 2;
}

function pointForPineapple() {
  let pineapplePoint = "+10";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(pineapplePoint, pineappleX, pineappleY);
  gamePoint += 10;
}

function pointForGrape() {
  let grapePoint = "+4";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grapePoint, grapeX, grapeY);
  gamePoint += 4;
}

function pointForStrawberry() {
  let strawberryPoint = "+8";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(strawberryPoint, strawberryX, strawberryY);
  gamePoint += 8;
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
  hit = collideRectRect(grenadeX, grenadeY, grenadeSize, grenadeSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForGrenade();  
  } 
  hit = collideRectRect(grenadeX2, grenadeY2, grenadeSize2, grenadeSize2, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForGrenade2();  
  }
  hit = collideRectRect(nuclearX, nuclearY, nuclearSize, nuclearSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForNuclear();  
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

// Move hat with key control
function moveHat() {
  if (keyIsDown(LEFT_ARROW) && posX > 0) {
    posX -= xSpeed; 
  }
  if (keyIsDown(RIGHT_ARROW) && posX < 810) { 
    posX += xSpeed;
  }
}

// Display all of the images
function displayImg() {
  image(basketImg, posX, posY, basketSize, basketSize);
  image(appleImg, appleX, appleY, appleSize, appleSize);
  image(bananaImg, bananaX, bananaY, bananaSize, bananaSize);
  image(strawberryImg, strawberryX, strawberryY, strawberryWidth, strawberryHeight);
  image(pineappleImg, pineappleX, pineappleY, pineappleSize, pineappleSize);
  image(grapeImg, grapeX, grapeY, grapeSize, grapeSize);
  image(scoreButtonImg, buttonX, buttonY, scoreButtonWidth, scoreButtonHeight);
  image(grenadeImg, grenadeX, grenadeY, grenadeSize, grenadeSize);
  image(grenadeImg2, grenadeX2, grenadeY2, grenadeSize2, grenadeSize2);
  image(nuclearImg, nuclearX, nuclearY, nuclearSize, nuclearSize);
}

// Make fruits fall down randomly from the top of the screen
function moveFruit() {
  appleY += random(1, 1.5);
  if (appleY > 486) {
    appleY = 0;
    appleX = random(0, 880);
  }

  bananaY += random(1, 1.9);
  if (bananaY > 487) {
    bananaY = 0;
    bananaX = random(0, 880);
  }

  pineappleY += random(1, 2.3);
  if (pineappleY > 487) {
    pineappleY = 0;
    pineappleX = random(0, 880);
  }

  grapeY += random(1, 2.7);
  if (grapeY > 488) {
    grapeY = 0;
    grapeX = random(0, 880);
  }

  strawberryY += random(1, 2.9);
  if (strawberryY > 486.6) {
    strawberryY = 0;
    strawberryX = random(0, 880);
  }

  grenadeY += random(1, 3);
  if (grenadeY > 462) {
    grenadeY = 0;
    grenadeX = random(0, 890);
  }

  grenadeY2 += random(1, 3.5);
  if (grenadeY2 > 462) {
    grenadeY2 = 0;
    grenadeX2 = random(0, 890);
  }

  nuclearY += random(1, 3.5);
  if (nuclearY > 462) {
    nuclearY = 0;
    nuclearX = random(0, 890);
  }
}

function preload() { 
  basketImg = loadImage("assets/basket-clipart.png "), appleImg = loadImage("assets/appleclipart.png");
  bananaImg = loadImage("assets/bananaclipart.png"), strawberryImg = loadImage("assets/strawberryclipart.png");
  pineappleImg = loadImage("assets/pineappleclipart.png"), grapeImg = loadImage("assets/grapeclipart.png");
  scoreButtonImg = loadImage("assets/score-button.png"); grenadeImg = loadImage("assets/grenade-clipart.png");
  grenadeImg2 = loadImage("assets/grenade-clipart2.png"); nuclearImg = loadImage("assets/nuclear-bomb.png");
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

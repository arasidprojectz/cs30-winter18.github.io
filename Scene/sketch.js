// Interactive Scene
// AL Rasid Mamun
// Mar 18, 2019
// Extra for Experts:
// Make a customize mouse cursor to move the basket
// Add music - Game soundtrack
//           - Collecting points
//           - Rock touching the basket
//           - Explosion of the grenade
//           - Explosion of nuclear bomb  

let bgImage, basketImg, appleImg, bananaImg, strawberryImg, pineappleImg, grapeImg, scoreButtonImg, grenadeImg, spikedBall, nuclearImg;
let basketSize, appleSize, bananaSize, pineappleSize, grapeSize, strawberryWidth, strawberryHeight, scoreButtonWidth, scoreButtonHeight, grenadeSize, spikedBallSize , nuclearSize;
let appleX, bananaX, pineappleX, grapeX, strawberryX, buttonX, scoreX, grenadeX, spikedBallX, nuclearX; 
let appleY, bananaY, pineappleY, grapeY, strawberryY, buttonY, scoreY,  grenadeY, spikedBallY, nuclearY;
let posX, posY, cursorX, cursorY, xSpeed, hit, gamePoint, state;
let gameSound, catchSound, rockSound, explosionSound, nuclearSound;

function setup() {
  bgImage = loadImage("assets/forestbackground.jpg");
  noCursor();
  createCanvas(900, 700); 
  basketSize = 90, appleSize = 35, bananaSize = 50, grapeSize = 45, pineappleSize = 60, strawberryWidth = 30, strawberryHeight = 35, scoreButtonWidth = 100, scoreButtonHeight = 50, grenadeSize = 60, spikedBallSize = 62, nuclearSize = 65;
  appleX = random(0, 880), bananaX = random(0, 880), pineappleX = random(0, 880), grapeX = random(0, 880), strawberryX = random(0, 880), grenadeX = random(0, 890), spikedBallX = random(0, 890), nuclearX = random(0, 890), buttonX = 710, scoreX = 846.5;
  appleY = 0, bananaY = 0, pineappleY = 0, grapeY = 0, strawberryY = 0, buttonY = 0, grenadeY = 0, spikedBallY = 0, nuclearY = 0, scoreY = 40;
  posX = 350, posY = 520, cursorX = 100, cursorY = 100, xSpeed = 5, hit = false, gamePoint = 0, state = 1;
  gameSound.play(), gameSound.setVolume(0.1), catchSound.setVolume(0.1), rockSound.setVolume(0.1), explosionSound.setVolume(0.1), nuclearSound.setVolume(0.1);
}

function draw() {
  background(bgImage);
  if (state === 1){ // State 1, Instruction will show up
    textAlign(CENTER);
    textSize(20);
    strokeWeight(5);
    textLeading(10);
    text("When fruits are fall down from the sky, move the basket to catch them.", 420, 345);
    text("To move the basket, either you could use left/right arrow key or drag it using the mouse cursor.", 450, 368);
    text("Try to avoid any explosion materials, especially from the NUCLEAR BOMB!", 420, 390);
    text("PRESS ANY KEY TO START GAME!", 430, 412);
    if (keyIsPressed === true) {
      state = 2;
    }
  }
  if (state === 2) { // State 2, Runs the game
    displayImg();
    moveHat();
    createCursor();
    moveFruit();
    checkCollide();
    keepGameScore();
  }
  if (state === 3) { // State 3, Restart the game
    textSize(30);
    strokeWeight(5);
    textLeading(10);
    text("Score: " + gamePoint, 440, 345);
    text("PRESS ANY KEY TO RESTART GAME!", 435, 385);
    if (keyIsPressed === true) {
      state = 2;
      gamePoint = 0;
    }
  }

} 

function keepGameScore() { // Keep the score updated
  fill(0);
  noStroke();
  textSize(40);
  textLeading(10); 
  text(gamePoint , scoreX, scoreY);
}

function pointForGrenade() { // Set points for Grenade
  let grenadePoint = "-50";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grenadePoint, grenadeX, grenadeY);
  gamePoint -= 50;
}

function pointForBall() { // Set points for SpikeBall
  let spikedBallPoint = "-25";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(spikedBallPoint, spikedBallX, spikedBallY);
  gamePoint -= 25;
}

function pointForApple() { // Set points for apple
  let applePoint = "+6";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(applePoint, appleX, appleY);
  gamePoint += 6;
}

function pointForBanana() { // Set points for Banana
  let bananaPoint = "+2";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(bananaPoint, bananaX, bananaY);
  gamePoint += 2;
}

function pointForPineapple() { // Set points for Pineapple
  let pineapplePoint = "+10";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(pineapplePoint, pineappleX, pineappleY);
  gamePoint += 10;
}

function pointForGrape() { // Set points for Grape
  let grapePoint = "+4";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(grapePoint, grapeX, grapeY);
  gamePoint += 4;
}

function pointForStrawberry() { // Set points for Strawberry
  let strawberryPoint = "+8";
  fill(0);
  noStroke();
  textSize(25);
  textLeading(10); 
  text(strawberryPoint, strawberryX, strawberryY);
  gamePoint += 8;
}

function checkCollide() { // If there is any collision happends, points would be given or taken away
  hit = collideRectRect(appleX, appleY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForApple(); 
    catchSound.play();
  }
  hit = collideRectRect(bananaX, bananaY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForBanana();
    catchSound.play();
  }
  hit = collideRectRect(pineappleX, pineappleY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForPineapple();
    catchSound.play();
  }
  hit = collideRectRect(grapeX, grapeY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForGrape(); 
    catchSound.play();
  }
  hit = collideRectRect(strawberryX, strawberryY, appleSize, appleSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForStrawberry();
    catchSound.play();
  }
  hit = collideRectRect(grenadeX, grenadeY, grenadeSize, grenadeSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForGrenade(); 
    explosionSound.play(); 
  } 
  hit = collideRectRect(spikedBallX, spikedBallY, spikedBallSize, spikedBallSize, posX, posY, basketSize, basketSize);
  if (hit === true) {
    pointForBall();  
    rockSound.play();
  }
  hit = collideRectRect(nuclearX, nuclearY, nuclearSize, nuclearSize, posX, posY, basketSize, basketSize);
  if (hit === true) { 
    nuclearSound.play();
    state = 3;
  }
}

function myMouseDragged() { // Move the coustum mouse with mouse control
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


function moveHat() { // Move hat with key control
  if (keyIsDown(LEFT_ARROW) && posX > 0) {
    posX -= xSpeed; 
  }
  if (keyIsDown(RIGHT_ARROW) && posX < 810) { 
    posX += xSpeed;
  }
}

function displayImg() { // Display all of the images
  image(basketImg, posX, posY, basketSize, basketSize);
  image(appleImg, appleX, appleY, appleSize, appleSize);
  image(bananaImg, bananaX, bananaY, bananaSize, bananaSize);
  image(strawberryImg, strawberryX, strawberryY, strawberryWidth, strawberryHeight);
  image(pineappleImg, pineappleX, pineappleY, pineappleSize, pineappleSize);
  image(grapeImg, grapeX, grapeY, grapeSize, grapeSize);
  image(scoreButtonImg, buttonX, buttonY, scoreButtonWidth, scoreButtonHeight);
  image(grenadeImg, grenadeX, grenadeY, grenadeSize, grenadeSize);
  image(spikedBall, spikedBallX, spikedBallY, spikedBallSize, spikedBallSize);
  image(nuclearImg, nuclearX, nuclearY, nuclearSize, nuclearSize);
}

function moveFruit() { // Make fruits fall down randomly from the top of the screen
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

  grenadeY += random(3, 4);
  if (grenadeY > 462) {
    grenadeY = 0;
    grenadeX = random(0, 890);
  }

  spikedBallY += random(4, 5);
  if (spikedBallY > 462) {
    spikedBallY = 0;
    spikedBallX = random(0, 890);
  }

  nuclearY += random(5, 6);
  if (nuclearY > 462) {
    nuclearY = 0;
    nuclearX = random(0, 890);
  }
}

function preload() { 
  basketImg = loadImage("assets/basket-clipart.png "), appleImg = loadImage("assets/appleclipart.png");
  bananaImg = loadImage("assets/bananaclipart.png"), strawberryImg = loadImage("assets/strawberryclipart.png");
  pineappleImg = loadImage("assets/pineappleclipart.png"), grapeImg = loadImage("assets/grapeclipart.png");
  scoreButtonImg = loadImage("assets/score-button.png"), grenadeImg = loadImage("assets/grenade-clipart.png");
  spikedBall = loadImage("assets/spiked-ball.png"), nuclearImg = loadImage("assets/nuclear-bomb.png");
  gameSound = loadSound("assets/game-sound.mp3"), catchSound = loadSound("assets/collect-point.mp3");
  rockSound = loadSound("assets/rock-falling.mp3"), explosionSound = loadSound("assets/explosion.mp3");
  nuclearSound = loadSound("assets/nuclear-bomb.mp3");
} 

function createCursor() { // Create the customize mouse cursor
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
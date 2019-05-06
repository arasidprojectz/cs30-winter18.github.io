// State Variable Assignment
// Al Rasid Mamun
// April 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let buttonX, buttonY, xSpeed, ySpeed;
// let buttonWidth, buttonHeight;
// let blueButton;
// let state;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   state = "menu";
//   buttonX = width/2;
//   buttonY = height/2;
//   buttonWidth = 120; 
//   buttonHeight = 50;
// }

// function draw() {
//   background(220);
//   displayImages();
//   background(0);
//   if (state === "menu") {
//     displayImages();
//   }
//   if (state === "characters") {
//     selectCharacter();
//   }
//   if (state === "game") {
//     beginToPlay();
//   }
//   if (state === "quit") {
//     quitGame();
//   }
// }

// function beginToPlay(){

// }

// function quitGame() {

// }

// function displayImages() {
//   image(blueButton, buttonX, buttonY, buttonWidth, buttonHeight);
// }


// function preload() {
//   blueButton = loadImage("assets/blue-button.png");
// }

// function selectCharacter() {
//   fill(255);
//   ellipse(30, 30, 30, 30);
// }

// function displayMenu() {
//   rectMode(CENTER);
//   rect(buttonX, buttonY, buttonWidth, buttonHeight);
// }

// function mousePressed() {
//   if (state === "menu") {
//     if (selectCharacter) {
//       state = "characters";
//     }
//   }
// }

let sprite;
let ninjaIdleLeftImg = [];
let ninjaIdleRightImg = [];
let ninjaLeftImg = [];
let ninjaRightImg = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite = {
    x: 0, 
    y: 0, 
    speedX: 10, 
    speedY: 2,
    imgWidth: 480,
    imgHeight: 420,
    spriteState: "ninjaLtIdle",
    lastDirection: "left",
    index: 0,
  };

}

function preload() {
  for (let i=0; i<11; i++) {
    ninjaIdleRightImg[i] = loadImage("assets/ninja-idle/right_idle/ninja_idle_"+i+".png");
    ninjaIdleLeftImg[i] = loadImage("assets/ninja-idle/left_idle/ninja_idle_"+i+".png");
  }
  for (let i=0; i<16; i++) {
    ninjaRightImg[i] = loadImage("assets/ninja-walk/right_move/ninja_walk_"+i+".png");
    ninjaLeftImg[i] = loadImage("assets/ninja-walk/left_move/ninja_walk_"+i+".png");
  }
}

function draw() {
  background(220);
  checkState();
  spriteRightToLeft();

}

function checkState() {
  if (sprite.spriteState === "ninjaRtIdle") {
    image(ninjaIdleRightImg[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaLtIdle") {
    image(ninjaIdleLeftImg[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaRtWalk") {
    image(ninjaRightImg[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaLtWalk") {
    image(ninjaLeftImg[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
}

function spriteRightToLeft() {
  if (keyIsDown(RIGHT_ARROW) && keyIsPressed === true && frameCount % 5 === 0) {
    sprite.spriteState = "ninjaRtWalk";
    sprite.index = (sprite.index + 1) % ninjaRightImg.length;
    sprite.lastDirection = "right";
    sprite.x += sprite.speedX;
  }
  else if (keyIsDown(LEFT_ARROW) && keyIsPressed === true && frameCount % 5 === 0) {
    sprite.spriteState = "ninjaLtWalk";
    sprite.index = (sprite.index + 1) % ninjaLeftImg.length;
    sprite.lastDirection = "left";
    sprite.x -= sprite.speedX;
  }  
  else if (keyIsPressed === false && frameCount % 10 === 0) {
    if (sprite.lastDirection === "left") {
      sprite.spriteState = "ninjaLtIdle";
    } else {
      sprite.spriteState = "ninjaRtIdle";
    }
    // Ternary operator:
    // var x = (boolean expression) ? value : other value
    // sprite.spriteState = sprite.lastDirection === "left" ? "ninjaLtIdle" : "ninjaRtIdle";
    sprite.index = (sprite.index + 1) % ninjaIdleLeftImg.length;
  }   
}


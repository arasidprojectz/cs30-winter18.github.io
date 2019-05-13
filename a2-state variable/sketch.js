// Computer Science 30 Major Project
// Al Rasid Mamun
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
let ninjaIdleLeft = [];
let ninjaIdleRight = [];
let ninjaLeft = [];
let ninjaRight = [];
let ninjaLeftJump = [];
let ninjaRightJump = [];
let ninjaLtCrouch = [];
let ninjaRtCrouch = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite = {
    x: 0, 
    y: 0,
    speedX: 6, 
    speedY: 2,
    imgWidth: 480,
    imgHeight: 420,
    index: 0,
    gravity: 0.1,
    jumpState: true,
    spriteState: "ninjaRtIdle",
    lastDirection: "right",
  };


}

function preload() {
  for (let i=0; i<11; i++) {
    ninjaIdleRight[i] = loadImage("assets/ninja-idle/right_idle/ninja_idle_"+i+".png");
    ninjaIdleLeft[i] = loadImage("assets/ninja-idle/left_idle/ninja_idle_"+i+".png");
  }
  for (let i=0; i<16; i++) {
    ninjaRight[i] = loadImage("assets/ninja-walk/right_move/ninja_walk_"+i+".png");
    ninjaLeft[i] = loadImage("assets/ninja-walk/left_move/ninja_walk_"+i+".png");
  }
  for (let i=0; i<10; i++) {
    ninjaRightJump[i] = loadImage("assets/ninja-jump/right_jump/ninja_jump_"+i+".png");
    ninjaLeftJump[i] = loadImage("assets/ninja-jump/left_jump/ninja_jump_"+i+".png");
  }
}

function draw() {
  background(220);
  checkState();
  spriteRightToLeft();
  spriteJump();

}

function checkState() {
  if (sprite.spriteState === "ninjaRtIdle") {
    image(ninjaIdleRight[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaLtIdle") {
    image(ninjaIdleLeft[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaRtWalk") {
    image(ninjaRight[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaLtWalk") {
    image(ninjaLeft[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaRtJump") {
    image(ninjaRightJump[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
  if (sprite.spriteState === "ninjaLtJump") {
    image(ninjaLeftJump[sprite.index], sprite.x, sprite.y, sprite.imgWidth, sprite.imgHeight);
  }
}

function spriteRightToLeft() {
  if (keyIsDown(RIGHT_ARROW) && keyIsPressed && frameCount % 5 === 0) {
    sprite.spriteState = "ninjaRtWalk";
    sprite.index = (sprite.index + 1) % ninjaRight.length;
    sprite.lastDirection = "right";
    sprite.x += sprite.speedX;
  }
  else if (keyIsDown(LEFT_ARROW) && keyIsPressed && frameCount % 5 === 0) {
    sprite.spriteState = "ninjaLtWalk";
    sprite.index = (sprite.index + 1) % ninjaLeft.length;
    sprite.lastDirection = "left";
    sprite.x -= sprite.speedX;
  }  
  else if (keyIsPressed === false && frameCount % 10 === 0) {
    sprite.index = (sprite.index + 1) % ninjaIdleLeft.length;
    if (sprite.lastDirection === "left") {
      sprite.spriteState = "ninjaLtIdle";
    } else {
      sprite.spriteState = "ninjaRtIdle";
    }
  }   
}

function spriteJump() {
  spriteGravity();
  if ((keyIsDown(32)) && keyIsPressed && sprite.jumpState === false && frameCount % 5 === 0) {
    sprite.index = (sprite.index + 1) % ninjaRightJump.length;
    sprite.spriteState = "ninjaRtJump";
    sprite.speedY = -5;
    sprite.jumpState = true; 
    if (sprite.lastDirection === "right") {
      sprite.spriteState = "ninjaRtIJump";
    } else {
      sprite.spriteState = "ninjaLtJump";
    }
  }
  if (sprite.jumpState === true && frameCount % 5 === 0) {
    sprite.spriteState = "ninjaRtjump";
  }
}  

function spriteGravity() {
  sprite.y += sprite.speedY;
  sprite.speedY += sprite.gravity;
  if (sprite.y > height - 400) {
    sprite.jumpState = false;
    sprite.y = height - 400;
  }
} 



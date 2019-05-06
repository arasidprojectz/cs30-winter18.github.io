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
    imgWidth: 380,
    imgHeight: 320,
    spriteState: "ninjaLtIdle",
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
    image(ninjaIdleRightImg[sprite.index], sprite.x, sprite.y, 480, 420);
  }
  if (sprite.spriteState === "ninjaLtIdle") {
    image(ninjaIdleLeftImg[sprite.index], sprite.x, sprite.y, 480, 420);
  }
  if (sprite.spriteState === "ninjaRtWalk") {
    image(ninjaRightImg[sprite.index], sprite.x, sprite.y, 480, 420);
  }
  if (sprite.spriteState === "ninjaLtWalk") {
    image(ninjaLeftImg[sprite.index], sprite.x, sprite.y, 480, 420);
  }
}

function spriteRightToLeft() {
  if (keyIsDown(RIGHT_ARROW) && keyIsPressed === true && frameCount % 6 === 0) {
    sprite.spriteState = "ninjaRtWalk";
    sprite.index = (sprite.index + 1) % ninjaRightImg.length;
    sprite.x += sprite.speedX;
  } 
  else if (keyIsPressed === false &&  frameCount % 10 === 0) {
    sprite.spriteState = "ninjaRtIdle";
    sprite.index = (sprite.index + 1) % ninjaIdleRightImg.length;
  }

  if (keyIsDown(LEFT_ARROW) && keyIsPressed === true && frameCount % 6 === 0) {
    sprite.spriteState = "ninjaLtWalk";
    sprite.index = (sprite.index + 1) % ninjaLeftImg.length;
    sprite.x -= sprite.speedX;
  }  
  else if (keyIsPressed === false && frameCount % 10 === 0) {
    sprite.spriteState = "ninjaLtIdle";
    sprite.index = (sprite.index + 1) % ninjaIdleLeftImg.length;
  }   
}

// let y, speedY;
// let x, radius;
// let gravity, jumping;
// let imgs, imgs2, imgWidth, imgHeight, ground, index, state;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   imgWidth = 400;
//   imgHeight = 440; 
//   ground = height - imgHeight; 
//   x = width/2;
//   y = ground;
//   gravity = 0.1;
//   speedY = 0;
//   jumping = true;
//   index = 0;
//   state = 2;
// }

// function draw() {
//   background(220);
//   // stateCheck(); 
//   y += speedY;
//   speedY += gravity;
//   if (y > ground) {
//     jumping = false;
//     y = ground;
//   }
//   // index = (index += 1) % imgs.length;
//   // image(imgs[index], x, y, imgWidth, imgHeight);
// //   image(imgs2[index], x, y, imgWidth, imgHeight);
// }

// // function stateCheck() {
// //   if (state === 1) {
// //     image(imgs[index], x, y, imgWidth, imgHeight);
// //   } 
// //   if (state === 2) {
// //     image(imgs2[index], x, y, imgWidth, imgHeight);
// //   } 
// // }

// function keyPressed() {
//   if ((key === " ") && jumping === false) {
//     image(imgs, x, y, imgWidth, imgHeight);
//     // index = (index + 1) % imgs.length;
//     speedY = -5;
//     jumping = true; 
//   }
// }

// // function keyReleased() {
// //   if ((key === " ") && jumping === true) {
// //     image(imgs, x, y, imgWidth, imgHeight);
// //   }  
// // }

// function preload() {
//   imgs = loadImage("assets/m1-jumplt/m1-jumplt1.png");
//   imgs2 = loadImage("assets/m1-jumplt/m1-jumplt2.png");
// }



// // function preload() {
// //   for (let i=0; i<2; i++) {
// //     imgs[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");
// //     imgs2[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");  
// //   }
  
// // }



























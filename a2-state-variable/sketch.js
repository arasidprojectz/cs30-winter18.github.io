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


let imgs = [];
let imgs2 = [];
let index;
let x;
let y;
let speedX;
let speedY;
let state;


function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  index = 0;
  x = 0;
  y = 0;
  speedX = 10;
  speedY = 2; 
}

function preload() {
  for (let i=0; i<16; i++) {
    imgs[i] = loadImage("assets/ninja-walk/move_left/ninja_walk_"+i+".png");
    imgs2[i] = loadImage("assets/ninja-walk/move_right/ninja_walk_"+i+".png");
  }
}

function draw() {
  background(255);
  checkState();
  moveLeft();
}

function checkState() {
  if (state === 1) {
    image(imgs[index], x, y, 480, 420);
  }
  if (state === 2) {
    image(imgs2[index], x, y, 480, 420);
  }
}

function moveLeft() {
  if (keyIsDown(RIGHT_ARROW) && frameCount % 7 === 0) {
    state = 1;
    index = (index + 1) % imgs.length;
    x += speedX;
  }
  else if (keyIsDown(LEFT_ARROW) && frameCount % 7 === 0) {
    state = 2;
    index = (index + 1) % imgs.length;
    x -= speedX;
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



























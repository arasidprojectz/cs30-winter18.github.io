// Al Rasid Mamun
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, g, rectSize, speedX, speedY;
let spriteJump;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  g = 0.6;
  rectSize = 30;
  speedX = 5;
  speedY = 5;
  spriteJump = false;
}

function draw() {
  background(220);
  displaySprite();
  moveSprite();
}

function moveSprite() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= speedX;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x += speedX;
  }
  if (key === " ") {
    y -= 15;
  }
}





//   if (keyIsDown(LEFT_ARROW)) {
//     x -= speedX;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     x += speedX; 
//   }
//   if (key === " ") {
//     speedY = -7;
//     spriteJump = false; 
//   }

//   if (spriteJump === false) {
//     speedY += g;
//   }
//   if (y > height) {
//     y = 0;
//     speedY = 0;
//   }
// }

function displaySprite() {
  rect(x, y, rectSize, rectSize);
}
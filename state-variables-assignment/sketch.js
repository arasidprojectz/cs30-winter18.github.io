// State Variable Assignment
// Al Rasid Mamun
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, g, rectSize, speedX, speedY;
let jumpState;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  g = 0.6;
  rectSize = 30;
  speedX = 5;
  speedY = 5;
  jumpState = false;
}

function draw() {
  background(220);
  rect(x, y, rectSize, rectSize);
  moveSprite();
  spriteLands();
}

function moveSprite() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= speedX;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speedX; 
  }
  if (key === " ") {
    speedY = -15;
    jumpState = false; 
  }

  if (jumpState === false) {
    speedY += g;
  }
  if (y > height) {
    y = 0;
    speedY = 0;
  }
}

function spriteLands(PosY) {
  speedY = 0;
  jumpState = true;
  y = posY - rectSize;
}

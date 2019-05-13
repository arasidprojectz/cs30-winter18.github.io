let x, y, speedY, imgWidth, imgHeight, index, state;
let gravity, jumping;
let ninjaIdleRight = [], ninjaRightJump = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgWidth = 480;
  imgHeight = 440;
  x = 0;
  y = height - imgHeight;
  gravity = 0.1;
  speedY = 0;
  jumping = true;
  index = 0;
  state = "rightIdle";
}

function draw() {
  background(220);
  buttonPressed();
  stateCheck();
  console.log(state);
  y += speedY;
  speedY += gravity;
  if (y > height - imgHeight) {
    jumping = false;
    y = height - imgHeight;
  }
}

function stateCheck() {
  if (state === "rightIdle") {
    image(ninjaIdleRight[index], x, y, imgWidth, imgHeight);
  }
  if (state === "rightJump") {
    image(ninjaRightJump[index], x, y, imgWidth, imgHeight);
  }
}

function buttonPressed() {
  if ((keyIsDown(32) && keyIsPressed && jumping === false)) {
    index = (index + 1) % ninjaRightJump.length;
    state = "rightJump";
    speedY = -5;
    jumping = true;
  }
  if (keyIsPressed === false && jumping === false ) {
    state = "rightIdle";
  }
}  

function preload() {
  for (let i=0; i<11; i++) {
    ninjaIdleRight[i] = loadImage("assets/ninja-idle/right_idle/ninja_idle_"+i+".png");
  }
  for (let i=0; i<10; i++) {
    ninjaRightJump[i] = loadImage("assets/ninja-jump/right_jump/ninja_jump_"+i+".png");
  }
}
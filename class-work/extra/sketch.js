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
  speedY = 1; 
}

function preload() {
  for (let i=0; i<5; i++) {
    imgs[i] = loadImage("assets/m1-movelt/moveleft"+i+".png");
    imgs2[i] = loadImage("assets/m1-movert/m1-movert"+i+".png");
  }
}

function draw() {
  background(0);
  checkState();
  moveLeft();

}


function checkState() {
  if (state === 1) {
    image(imgs[index], x, y, 200, 220);
  }
  if (state === 2) {
    image(imgs2[index], x, y, 200, 220);
  }
}

function moveLeft() {
  if (keyIsDown(RIGHT_ARROW) && frameCount % 12 === 0) {
    state = 1;
    index = (index + 1) % imgs.length;
    x += speedX;
  }
  else if (keyIsDown(LEFT_ARROW) && frameCount % 12 === 0) {
    state = 2;
    index = (index + 1) % imgs.length;
    x -= speedX;
  }
}

    
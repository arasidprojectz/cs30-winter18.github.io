let imgs;
let imgs1;
let x;
let y;
let state;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  state = 1;

}

function preload() {
  imgs = loadImage("assets/m1-movelt/moveleft0.png");
  imgs1 = loadImage("assets/m1-movert/m1-movert0.png");


}

function draw() {
  background(0);
  checkState()
  if (state === 1) {
    image(imgs, x, y, 200, 220);
  }
  if (state === 2) {
    image(imgs1, x, y, 200, 220);
  }
    

} 

function checkState() {
  if (keyIsDown(RIGHT_ARROW)) {
    state = 1;
    x += 5;
  } 
  else if (keyIsDown(LEFT_ARROW)) {
    state = 2;
    x -= 5;
  }
}


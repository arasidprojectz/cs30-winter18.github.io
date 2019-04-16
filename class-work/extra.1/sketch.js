
let y, speedY;
let x, radius;
let gravity, jumping;
let imgs = [], imgs2 = [], imgWidth, imgHeight, ground, index, stateOfJump;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgWidth = 400;
  imgHeight = 440; 
  ground = height - imgHeight; 
  x = width/2;
  y = ground;
  gravity = 0.1;
  speedY = 0;
  jumping = true;
  index = 0;
  stateOfJump = 1;
}

function draw() {
  background(220);
  y += speedY;

  speedY += gravity;
  if (y > ground) {
    image(imgs[index], x, y, imgWidth, imgHeight);
    jumping = false;
    y = ground;
  }
  // index = (index += 1) % imgs.length;
  // image(imgs[index], x, y, imgWidth, imgHeight);
  image(imgs2[index], x, y, imgWidth, imgHeight);
}


function keyPressed() {
  if ((key === " ") && jumping === false)  {
    // index = (index += 1) % imgs.length;
    image(imgs2[index], x, y, imgWidth, imgHeight);
    speedY = -5;
    jumping = true;
    
  }
}

function preload() {
  for (let i=0; i<2; i++) {
    imgs[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");
    imgs2[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");  }
  
}


let y, speedY;
let x, radius;
let gravity, jumping;
let imgs = [], imgWidth, imgHeight, ground, index;

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
  
}

function draw() {
  background(220);
  y += speedY;
  speedY += gravity;
  if (y > ground) {
    jumping = false;
    y = ground;
  }
  image(imgs[index], x, y, imgWidth, imgHeight);


  
}


function keyPressed() {
  if ((key === " ") && jumping === false)  {
    // index = (index + 1) % imgs.length;
    speedY = -5;
    jumping = true;
    
  }
}

function preload() {
  for (let i=0; i<5; i++) {
    imgs[i] = loadImage("assets/m1-jumplt/m1-jumplt"+i+".png");
  }
  
}

// function mousePressed() {
//   index = (index + 1) % imgs.length;
// }
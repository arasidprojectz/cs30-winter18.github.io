
let y, speedY;
let x, radius;
let gravity, jumping;
let imgs, imgs2, imgWidth, imgHeight, ground, index, state;

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
  state = 2;
}

function draw() {
  background(220);
  // stateCheck(); 
  y += speedY;
  speedY += gravity;
  if (y > ground) {
    jumping = false;
    y = ground;
  }
  // index = (index += 1) % imgs.length;
  // image(imgs[index], x, y, imgWidth, imgHeight);
//   image(imgs2[index], x, y, imgWidth, imgHeight);
}

// function stateCheck() {
//   if (state === 1) {
//     image(imgs[index], x, y, imgWidth, imgHeight);
//   } 
//   if (state === 2) {
//     image(imgs2[index], x, y, imgWidth, imgHeight);
//   } 
// }

function keyPressed() {
  if ((key === " ") && jumping === false) {
    image(imgs, x, y, imgWidth, imgHeight);
    // index = (index + 1) % imgs.length;
    speedY = -5;
    jumping = true; 
  }
}

// function keyReleased() {
//   if ((key === " ") && jumping === true) {
//     image(imgs, x, y, imgWidth, imgHeight);
//   }  
// }

function preload() {
  imgs = loadImage("assets/m1-jumplt/m1-jumplt1.png");
  imgs2 = loadImage("assets/m1-jumplt/m1-jumplt2.png");
}



// function preload() {
//   for (let i=0; i<2; i++) {
//     imgs[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");
//     imgs2[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");  
//   }
  
// }



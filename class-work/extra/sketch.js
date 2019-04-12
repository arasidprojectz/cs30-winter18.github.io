let imgs = [];
let imgs2 = [];
let index;
let x;
let y;
let speedX;
let speedY;
let testImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  index = 0;
  x = 0;
  y = 0;
  speedX = 10;
  speedY = 1; 
}

function preload() {
  for (let i=0; i<5; i++) {
    imgs[i] = loadImage("assets/m1-movelt/moveleft"+i+".png");

  }
  // for (let i=0; i<5; i++) {
  //   imgs2[i] = loadImage("assets/m1-movert/movert"+i+".png");
  // }  
  console.log(imgs);
  // testImg = loadImage("moveleft0.png");
}

function draw() {
  background(0);
  image(imgs[index], x, y, 200, 220);
  // image(imgs2[index], x, y, 200, 220);
  // moveLeft();
  // image(imgs[index], 0, 0, 200, 220);
  // index = (index + 1) % imgs.length;
  // for (let i=0; i<5; i++) {
  //   image(imgs[i], 0, 0, 140, 160); 
  //   i++;
  // }

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    index = (index + 1) % imgs.length;
    x += speedX;
  } else if (keyCode === RIGHT_ARROW) {
    index = (index + 1) % imgs.length;
  }
}

function moveLeft() {
  if (keyIsDown(RIGHT_ARROW)) {
    index = (index + 1) % imgs.length;
    x += speedX;
  }
}

// function keyTyped() {
//   if (key === 'RIGHT_ARROW') {
//     index = (index + 1) % imgs.length;
//   }
// }

    
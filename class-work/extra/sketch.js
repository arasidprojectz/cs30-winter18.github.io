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
  }
  for (let i=0; i<5; i++) {
    imgs[i] = loadImage("assets/m1-movelt/moveleft"+i+".png")
  }
}

function draw() {
  background(0);
  if (state = 1) {
    image(imgs[index], x, y, 200, 220);
  }
  if (state = 2) {
    image(imgs[index], x, y, 200, 220);
  }
  // image(imgs2[index], x, y, 200, 220);
  moveLeft();

}

if (state === 1) {
  image(imgs, x, y, 200, 220);
}
if (state === 2) {
  image(imgs1, x, y, 200, 220);
}

// function keyPressed() {
//   if (keyCode === RIGHT_ARROW) {
//     index = (index + 1) % imgs.length;
//     x += speedX;
//   } else if (keyCode === RIGHT_ARROW) {
//     index = (index + 1) % imgs.length;
//   }
// }

function moveLeft() {
  if (keyIsDown(RIGHT_ARROW) && frameCount % 5 === 0) {
    state = 1;
    index = (index + 1) % imgs.length;
    x += speedX;
  }
  else if (keyIsDown(LEFT_ARROW) && frameCount % 5 === 0) {
    state = 2;
    index = (index + 1) % imgs.length;
    x += speedX;
  }
}

// function keyTyped() {
//   if (key === 'RIGHT_ARROW') {
//     index = (index + 1) % imgs.length;
//   }
// }

    
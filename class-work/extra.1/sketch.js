let imgs = [];
let imgs2 = [];
let index;
let x;
let y;
let speedX;
let speedY;
stateOfWalk;

function setup() {
  createCanvas(windowWidth, windowHeight);
  index = 0;
  x = width/2;
  y = 0;
  speedX = 10;
  speedY = 1; 
  stateOfWalk = "left";
}

function preload() {
  for (let i=0; i<5; i++) {
    imgs[i] = loadImage("assets/m1-movelt/moveleft"+i+".png");

  }
  for (let e=0; e<5; e++) {
    imgs2[e] = loadImage("assets/m1-movert/m1-movert"+e+".png");
  }  

}

function draw() {
  background(0);
  checkState();


  // image(imgs2[index], x, y, 200, 220);
  // moveLeft();
}



function checkState() {
  if (stateOfWalk === "left") {
    image(imgs[index], x, y, 200, 220);
  }
  if (stateOfWalk === "right") {
    image(imgs2[index], x, y, 200, 220);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    stateOfWalk = "right";
    index = (index + 1) % imgs.length;
    x += speedX;
  } else if (keyCode === LEFT_ARROW) {
   stateOfWalk === "left";
   index = (index + 1) % imgs.length;
    x -= speedX;
  }
}

// function moveLeft() {
//   if (keyIsDown(RIGHT_ARROW)) {
//     index = (index + 1) % imgs.length;
//     x += speedX;
//   }
// }

// function keyTyped() {
//   if (key === 'RIGHT_ARROW') {
//     index = (index + 1) % imgs.length;
//   }
// }

    
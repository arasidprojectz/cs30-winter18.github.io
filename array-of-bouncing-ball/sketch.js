// Array of bouncing Balls Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  newBall = {
    x: random(width),
    y: random(height),
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 50),
    color: color(random(255), random(255), random(255)),
  };
  ballArray.push(newBall);
}

function draw() {
  background(220);

  for (let i = 0; i < ballArray.length; i++) {

  
  //move the ball
  ballArray[i].x += ballArray[i].dx;
  ballArray[i].y += ballArray[i].dy;

  fill(ballArray[i].color);
  ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius*2, newBall.randius*2);
  }
}

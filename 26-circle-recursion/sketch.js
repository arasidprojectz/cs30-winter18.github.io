// Circle Recursion


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle(width/2, width/2);
}

function drawCircle(x, radius) {
  let myGray = map(radius, 50, width/2, 0, 255);
  fill(myGray);
  ellipse(x, height/2, radius*2, radius*2);

  if (radius > 50) {
    drawCircle(x-radius/2, radius/2);
    drawCircle(x+radius/2, radius/2);
  }

}


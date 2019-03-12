// Rect Point

function setup() {
  createCanvas( 900, 600);
}

function draw() {
  background(0);
  for (let x = 20; x < width; x += 60) {
    for (let y = 20; y < height; y += 60) {
      rect(x, y, 3, 3);
      stroke(255);
      strokeWeight(0.25);
      line(x, y, mouseX, mouseY);
    }
  }

}

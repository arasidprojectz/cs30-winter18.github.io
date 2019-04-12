// Walker OOP Demo

class Walker {
  constructor(x, y, someColor, someSpeed) {
    this.x = x;
    this.y = y,
    this.color = someColor;
    this.speed = someSpeed;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }
}

// let andrew; 
// let kenny;

function setup() {
  createCanvas(windowWidth, windowHeight);
  andrew = new Walker(width/2, height/2, "purple", 5);
  kenny = new Walker();
}

function draw() {
  background(220);
  andrew.move();
  andrew.display();
}



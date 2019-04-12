let imgs = [];
let index;
let testImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  index = 0;
}

function preload() {
  for (let i=0; i<5; i++) {
    imgs[i] = loadImage("assets/moveleft"+i+".png"); 
  }
  console.log(imgs);
  // testImg = loadImage("moveleft0.png");
}

function draw() {
  background(0, 255, 0);
  image(imgs[index], 0, 0, 200, 220);
  // image(imgs[index], 0, 0, 200, 220);
  // index = (index + 1) % imgs.length;
  // for (let i=0; i<5; i++) {
  //   image(imgs[i], 0, 0, 140, 160); 
  //   i++;
  // }

}

function mousePressed() {
  index = (index + 1) % imgs.length;
}
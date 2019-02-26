// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// - Add music, try to make a mouse cursor"


let magicHat; 
let scaleImage; 

function setup() {
  createCanvas(900, 700);
  imageMode(CENTER); 
  scaleImage = 0.1;
}

function draw() {
  background(220);
  image(magicHat, mouseX, mouseY, magicHat.width * scaleImage, magicHat.height * scaleImage);

}

function preload() { 
  magicHat = loadImage("assets/Topper-Hat-Download-PNG.png");
}
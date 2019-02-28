// Interactive Scene
// AL Rasid Mamun
// Feb 14, 2019
//
// Extra for Experts:
// - Add music, try to make a mouse cursor"


let bgImage;
let imgX; 
let imgY; 
let scaleHat; 
let scaleImg;
let HatImg;
let appleImg;
let blastImg;
let grenadeImg;

function setup() {
  bgImage = loadImage("assets/forestbackground.jpg")
  createCanvas(900, 700); 
  scaleHat = 0.09;
  scaleFru = 0.02;
}

function draw() {
  background(bgImage);
  image(HatImg, 350, 520, HatImg.width * scaleHat, HatImg.height * scaleHat);
  
  
  
  image(appleImg, 0, 0, appleImg.width * scaleFru, appleImg.height * scaleFru);
  image(grenadeImg, 0, 0, grenadeImg.width * scaleImg, grenadeImg.height * scaleImg);
}

function preload() { 
  HatImg = loadImage("assets/hat.png");
  appleImg = loadImage("assets/apple.png");
  grenadeImg = loadImage("assets/grenade.png");
}
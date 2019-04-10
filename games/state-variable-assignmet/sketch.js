// State Variable Assignment
// Al Rasid Mamun
// April 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX, buttonY, xSpeed, ySpeed;
let buttonWidth, buttonHeight;
let blueButton;
let state;


function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "menu";
  buttonX = width/2;
  buttonY = height/2;
  buttonWidth = 120; 
  buttonHeight = 50;
}

function draw() {
  background(220);
  displayImages();
  background(0);
  if (state === "menu") {
    displayImages();
  }
  if (state === "characters") {
    selectCharacter();
  }
  if (state === "game") {
    beginToPlay();
  }
  if (state === "quit") {
    quitGame();
  }
}

function beginToPlay(){

}

function quitGame() {

}

function displayImages() {
  image(blueButton, buttonX, buttonY, buttonWidth, buttonHeight);
}


function preload() {
  blueButton = loadImage("assets/blue-button.png");
}

function selectCharacter() {
  fill(255);
  ellipse(30, 30, 30, 30);
}

function displayMenu() {
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
}

function mousePressed() {
  if (state === "menu") {
    if (selectCharacter) {
      state = "characters";
    }
  }
}


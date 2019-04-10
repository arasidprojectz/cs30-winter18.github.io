// Chess Board
// - in other words, keep the same functionality, but improve the method used

let isFilledWithWidth = true;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = pickCellSize();
}

function draw() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++){
      if(isFilledWithWidth) {
        fill(255);   
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      isFilledWithWidth = !isFilledWithWidth;
    }
    isFilledWithWidth = !isFilledWithWidth;
  }
}

function pickCellSize() {
  if (width > height) {
    return height/8;  
  }
  else {
    return width/8;
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  cellSize = pickCellSize();
}
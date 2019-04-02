// Grid Demo
// Dan Schellenberg
// April 1, 2019

let gridSize = 10;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}

function update(){
  let nextTurn = create2DArray(gridSize, gridSize);

  for (let y = 0; y < gridSize; y++) {
    for(let x = 0; x < gridSize; x++) {
      let neighbors = 0;

      //look at the 3x3 grid around the current location

      for (let i = -1; i < 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (y+i >= 0 && y+i < gridSize && x+j >= 0 && x+j < gridSize){
            neighbors += grid[y+i][x+j];
          }
        }
      }
    }

    neighbors -= grid[y][x];

    //applying the rules of the game
    if (grid[y][x] == 1) {
      if (neighbors === 2 || neighbors === 3) {
        nextTurn[y][x] = 1;
      }
      else {
        nextTurn[y][x] = 0;
      }
    }
  }

  grid = nextTurn;
}

function keypressed() {
  if (key === " ") {
    update();  } 
}

function createRandom2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      if (random(100) < 50) {
        emptyArray[i].push(0);
      }
      else {
        emptyArray[i].push(1);
      }
    }
  }
  return emptyArray;
}

function mousePressed(){ 
  let xcord = floor(mouseX / cellSize);
  let ycord = floor(mouseY / cellSize);

  if (grid[ycord][xcord] === 1) {

  }


}
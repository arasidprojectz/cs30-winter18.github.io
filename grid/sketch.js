// Grid Demo 

let gridSize = 10
let gridl
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++){
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] == 0) {
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
  let emptyArary = []
  for (let i = 0; i < rows; i++) {
    emptyArary.push([]);
    for ( let j = 0; j < cols; j++){
      emptyArary[i].push(0);
    }
  }
  return emptyArary;
}

createRandom2DArray(cols, rows) {
  let emptyArary = []
for (let i = 0; i < rows; i++) {
  emptyArary.push([]);
  for ( let j = 0; j < cols; j++){
    if (random(100) < 50) {
      emptyArary[i].push(0);
    }
    else {
      emptyArary[i].push(1);
    }

  }
}
return emptyArary;
}


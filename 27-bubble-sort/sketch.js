let theNumbers = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(theNumbers));
}

function draw() {
  background(220);
}

function bubbleSort(someArray) {
  let swapRequired = true;
  while (swapRequired) {
    swapRequired = false;
  }

  for (let i=0; i<someArray.length -1; i++) {
    if (someArray[i] > someArray[i+1]) {
      let temp = someArray[i];
      someArray[i] = someArray[i+1];
      someArray[i+1] = temp;
      swapRequired = true;
    }
  }
  return someArray;

}
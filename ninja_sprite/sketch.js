let sprite;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite = {
    x: 0,
    y: 0,
    spriteWidth: 200,
    spriteHeight: 220,
    speedX: 5,
    speedY: 5,
    spriteState: 0,
    index: 0,
  };
}

function draw() {
  background(0);
  image(img, sprite.x, sprite.y, 200, 220);
}



function preload() {
  img = loadImage("assets/ninja-walk/move_left/ninja_walk.png");

}




// let imgs = [];
// let imgs2 = [];
// let index;
// let x;
// let y;
// let speedX;
// let speedY;
// let state;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   state = 1;
//   index = 0;
//   x = 0;
//   y = 0;
//   speedX = 10;
//   speedY = 1; 
// }

// function preload() {
//   for (let i=0; i<5; i++) {
//     imgs[i] = loadImage("assets/m1-movelt/moveleft"+i+".png");
//     imgs2[i] = loadImage("assets/m1-movert/m1-movert"+i+".png");
//   }
// }

// function draw() {
//   background(0);
//   checkState();
//   moveLeft();

// }


// function checkState() {
//   if (state === 1) {
//     image(imgs[index], x, y, 200, 220);
//   }
//   if (state === 2) {
//     image(imgs2[index], x, y, 200, 220);
//   }
// }

// function moveLeft() {
//   if (keyIsDown(RIGHT_ARROW) && frameCount % 12 === 0) {
//     state = 1;
//     index = (index + 1) % imgs.length;
//     x += speedX;
//   }
//   else if (keyIsDown(LEFT_ARROW) && frameCount % 12 === 0) {
//     state = 2;
//     index = (index + 1) % imgs.length;
//     x -= speedX;
//   }
// }


// let y, speedY;
// let x, radius;
// let gravity, jumping;
// let imgs, imgs2, imgWidth, imgHeight, ground, index, state;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   imgWidth = 400;
//   imgHeight = 440; 
//   ground = height - imgHeight; 
//   x = width/2;
//   y = ground;
//   gravity = 0.1;
//   speedY = 0;
//   jumping = true;
//   index = 0;
//   state = 2;
// }

// function draw() {
//   background(220);
//   // stateCheck(); 
//   y += speedY;
//   speedY += gravity;
//   if (y > ground) {
//     jumping = false;
//     y = ground;
//   }
//   // index = (index += 1) % imgs.length;
//   // image(imgs[index], x, y, imgWidth, imgHeight);
// //   image(imgs2[index], x, y, imgWidth, imgHeight);
// }

// // function stateCheck() {
// //   if (state === 1) {
// //     image(imgs[index], x, y, imgWidth, imgHeight);
// //   } 
// //   if (state === 2) {
// //     image(imgs2[index], x, y, imgWidth, imgHeight);
// //   } 
// // }

// function keyPressed() {
//   if ((key === " ") && jumping === false) {
//     image(imgs, x, y, imgWidth, imgHeight);
//     // index = (index + 1) % imgs.length;
//     speedY = -5;
//     jumping = true; 
//   }
// }

// // function keyReleased() {
// //   if ((key === " ") && jumping === true) {
// //     image(imgs, x, y, imgWidth, imgHeight);
// //   }  
// // }

// function preload() {
//   imgs = loadImage("assets/m1-jumplt/m1-jumplt1.png");
//   imgs2 = loadImage("assets/m1-jumplt/m1-jumplt2.png");
// }



// // function preload() {
// //   for (let i=0; i<2; i++) {
// //     imgs[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");
// //     imgs2[i] = loadImage("assets/m1-jumplt/state-true/m1-jumplt"+i+".png");  
// //   }
  
// // }



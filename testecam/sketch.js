
var capture;
var pixR,pixG,pixB,pixA;
function setup() {
  createCanvas(screen.width, screen.height);
  capture = createCapture(VIDEO);
  capture.size(screen.width, screen.height);
  capture.hide();
}

function draw() {
}

function mousePressed() {
  for (let i = -5; i < 5; i++) {
    for (let j = -5; j < 5; j++) {
      desenhaPixelDaCam(mouseX + i*20 , mouseY + j*10 );
    }
  }
}
function touchStarted() {
  for (let i = -5; i < 5; i++) {
    for (let j = -5; j < 5; j++) {
      desenhaPixelDaCam(i*20 , j*10 );
    }
  }
}

function desenhaPixelDaCam(x, y) {
  capture.loadPixels();
  index =  (x + y*capture.width)*4;
  pixR = capture.pixels[index];
  pixG = capture.pixels[index + 1];
  pixB = capture.pixels[index + 2];
  pixA = capture.pixels[index + 3];
  capture.updatePixels();
  stroke(pixR,pixG,pixB, pixA);
  fill(pixR,pixG,pixB, pixA);
  pixSize = random(10);
  rect(x, y, pixSize, pixSize);
}
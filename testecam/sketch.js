
var capture;
var pixR,pixG,pixB,pixA;
function setup() {
  capture = createCapture(VIDEO);
  createCanvas(500, 800);
  capture.hide();
}

function draw() {
    desenhaPixelDaCam(round(random(capture.width)), round(random(capture.height)));
}


function desenhaPixelDaCam(x, y) {
  console.log(x,y);
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

var capture;
var img = false;
function setup() {
  var uploadBtn = createFileInput(imageUpload);
  createCanvas(windowWidth -5, windowHeight -5);

  background(30);
}

function draw() {

    if(img)
        desenhaPixelDaImg(round(random(img.width)), round(random(img.height)));
}


function desenhaPixelDaImg(x, y) {
  pix = img.get(x,y);

  stroke(pix);
  fill(pix);
  pixSize = floor(random(10)* (frameCount > 10000 ? 0.5 : 20000/frameCount)) ;
  rect(x, y, pixSize, pixSize);
}

function imageUpload(file){
    img = loadImage(file.data,function(){
      resizeCanvas(img.width, img.height);
    })
    
}

function windowResized() {
}
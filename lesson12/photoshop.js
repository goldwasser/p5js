let stage=0;
let SLU, maskImage, floaterImage, buffer;
let mx, my, mw, mh;  // parameters for the masking ellipse
let nx, ny;          // new placement of the copy

function preload() {
  SLU = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Slu_clock_tower.jpg/500px-Slu_clock_tower.jpg");
}

function setup() {
  createCanvas(SLU.width, SLU.height);
  pixelDensity(1);
  SLU.loadPixels();
  maskImage = createGraphics(SLU.width, SLU.height);
  maskImage.pixelDensity(1);
  buffer = createGraphics(SLU.width, SLU.height);
  buffer.pixelDensity(1);
  buffer.image(SLU,0,0);
  
  maskImage.noStroke();
  noFill();
  stroke('red');
}

function draw() {
  image(buffer,0,0);
  if (stage === 1) {
    ellipse(mx, my, 2*(mouseX-mx), 2*(mouseY-my));
  } else if (stage === 2) {
    image(floaterImage, mouseX-mx, mouseY-my)
  } else if (stage === 3) {
//    image(floaterImage, nx-mx, ny-my);
  }
}

function mousePressed() {
  if (stage === 0) {
    stage = 1;
    mx = mouseX;
    my = mouseY
  } else if (stage === 2) {
    nx = mouseX;
    ny = mouseY;
    buffer.image(floaterImage,mouseX-mx, mouseY-my);
    stage = 0;
  }
  
}

function mouseReleased() {
  if (stage === 1) {
    stage = 2;
    mw = 2*abs(mouseX-mx);
    mh = 2*abs(mouseY-my);
    // create the necessary mask/floater
    maskImage.background(0);
    maskImage.ellipse(mx, my, mw, mh);
    createFloater();
  }
}

function keyPressed() {
  if (key === 'r') {
    stage = 0;
    buffer.image(SLU,0,0);
  } else if (key === 's') {
      saveCanvas('edited','jpg');
  } else if (keyCode === ESCAPE && stage === 2) {
    stage = 0
  }
}

// customized version that sets floatImage based upon
// combining SLU image and maskImage.
function createFloater() {
  floaterImage = buffer.get();    // will be a copy of the original
  floaterImage.loadPixels();
  maskImage.loadPixels();
  for (let j=0; j < SLU.pixels.length; j+=4) {
    floaterImage.pixels[j+3] = maskImage.pixels[j+2];
  }
  floaterImage.updatePixels();
}

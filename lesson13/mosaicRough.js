s = 16;

function preload() {
  SLU = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Slu_clock_tower.jpg/500px-Slu_clock_tower.jpg"
  );
}

function setup() {
  createCanvas(SLU.width, SLU.height);
  SLU.pixelDensity(1);
  SLU.loadPixels();
  mosaic = createImage(width,height)
  mosaic.pixelDensity(1);
  mosaic.loadPixels();
  buildMosaic();
  text('s='+s, width/2, 20);
}

function draw() {
  if (keyIsPressed) {
    change = false;
    if (s > 1 && keyCode === LEFT_ARROW) {
      s--;
      change = true;
    } else if (s < 60 && keyCode === RIGHT_ARROW) {
      s++;
      change = true;
    }
    if (change) {
      buildMosaic();
      text('s='+s, width/2, 20);
    }
  }
}

/*
function keyPressed() {
  if (s > 1 && keyCode === DOWN_ARROW) {
    s--;
    buildMosaic();
  } else if (s < 40 && keyCode === UP_ARROW) {
    s++;
    buildMosaic();
  }
}
*/

// build (or rebuild) the mosaic based on s
function buildMosaic() {
   for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      n = 0; // number of pixels in the square
      p = 4 * (y * width + x);
      // loop through all pixels for the square, setting new color
      for (let dx = 0; dx < min(s, width - x); dx++) {
        for (let dy = 0; dy < min(s, height - y); dy++) {
          k = 4 * ((y+dy) * width + x+dx)
          for (let j=0; j<4; j++) {
            mosaic.pixels[k+j] = SLU.pixels[p+j];
          }
        }
      }
    }
  } 
  mosaic.updatePixels();
  image(mosaic,0,0);
}

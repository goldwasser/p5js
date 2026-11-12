let pad = 20;

function preload() {
    SLU = loadImage(
	"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Slu_clock_tower.jpg/500px-Slu_clock_tower.jpg"
  );
}

function setup() {
  createCanvas(2*pad + SLU.width, 2 * pad + SLU.height);
  SLU.loadPixels();
}

function draw() {
  background(SLU.get(mouseX-pad, mouseY-pad));
  image(SLU, pad, pad); 
}

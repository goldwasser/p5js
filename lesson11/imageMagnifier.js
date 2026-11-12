let zoomWindow = 200;
let zoomScale = 2;

function preload() {
  SLU = loadImage("https://upload.wikimedia.org/wikipedia/commons/e/ed/SLU_portals.jpg");
}

function setup() {
  createCanvas(SLU.width / zoomScale, SLU.height / zoomScale);
}

function draw() {
  image(SLU, 0, 0, width, height);
  if (mouseIsPressed) {
    image(
      SLU,
      mouseX - zoomWindow/2,
      mouseY - zoomWindow/2,
      zoomWindow, zoomWindow,
      zoomScale * mouseX - zoomWindow/2,
      zoomScale * mouseY - zoomWindow/2,
      zoomWindow,zoomWindow
    );
  }
}

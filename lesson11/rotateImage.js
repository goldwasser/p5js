function preload() {
  SLU = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Slu_billiken.jpg/500px-Slu_billiken.jpg"
  );
}

function setup() {
  let s = sqrt(SLU.width*SLU.width + SLU.height*SLU.height)/2;
  createCanvas(s,s);
  imageMode(CENTER);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  scale(0.5);
  theta = atan2(mouseX-width/2, height/2-mouseY);
  rotate(theta);
  image(SLU,0,0);  // as background, incase some spots are not covered  
}

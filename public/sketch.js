function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("container");
  background(0);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

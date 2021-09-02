let socket;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("container");
  background(0);
  socket = io.connect("http://localhost:5000");
  // the socket receiving data from the back-end
  socket.on("coordinates", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(0, 255, 0);
  ellipse(data.x, data.y, 20, 20);
}

function pen() {
  noStroke();
  if (mouseIsPressed) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 20, 20);

    const data = {
      x: mouseX,
      y: mouseY,
    };
    // Sending the data under the name "coordinates"
    socket.emit("coordinates", data);
  }
}

function draw() {
  pen();
}

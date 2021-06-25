let bubbles = [];
let bubbles_number = 400;
let size = 50;

function windowResized() {
  if (windowWidth <= 980) {
    bubbles_number = 100;
    size = 30;
  } else {
    bubbles_number = 400;
    size = 50;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < bubbles_number; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(10, size);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rc = 60;
    this.gc = 179;
    this.bc = 113;
  }
  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }
  show() {
    noStroke();
    fill(this.rc, this.gc, this.bc);
    ellipse(this.x, this.y, this.r);
  }
  clicked() {
    this.rc = random(100, 200);
    this.gc = random(100, 200);
    this.bc = random(100, 200);
  }
}

let p0, p1;

function setup() {
  createCanvas(800, 800);
  p0 = new Particle(5, height / 2);
  p1 = new Particle(width / 4, 5);
  p2 = new Particle((3 * width) / 4, height);
  p3 = new Particle(width, height / 2);
}

function draw() {
  background(0);
  stroke(255);
  console.log("MouseX:" + mouseX);
  console.log("MouseY:" + mouseY);
  if(mouseX>0 && mouseX<800 &&mouseY>0 && mouseY<800){
    p1.x = mouseX;
    p1.y = mouseY;
  }
  // p0.update();
  p1.update();
  p2.update();
  // p3.update();

  let delta = 0.03;
  colorMode(HSB);

  noFill();
  for (let t = 0; t <= 1.00001; t += delta) {
    stroke(t * 360, 255, 255, 0.5);
    strokeWeight(2);
    // stroke(255, 0.5);
    // line(x1, y1, x2, y2);
    let v = cubic(p0, p1, p2, p3, t);
  }
}

function cubic(p0, p1, p2, p3, t) {
  let v1 = quadratic(p0, p1, p2, t);
  let v2 = quadratic(p1, p2, p3, t);
  let x = lerp(v1.x, v2.x, t);
  let y = lerp(v1.y, v2.y, t);
  line(v1.x, v1.y, v2.x, v2.y);
  return createVector(x, y);
}

function quadratic(p0, p1, p2, t) {
  let x1 = lerp(p0.x, p1.x, t);
  let y1 = lerp(p0.y, p1.y, t);
  let x2 = lerp(p1.x, p2.x, t);
  let y2 = lerp(p1.y, p2.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  line(x1, y1, x2, y2);
  return createVector(x, y);
}

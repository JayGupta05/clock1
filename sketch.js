var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  
 
 
}

function draw() {
  background(255,255,255); 

  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);

  translate(200,200);  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,80,0,360);
  hrAngle = map(hr,0,100,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  drawSprites();
}
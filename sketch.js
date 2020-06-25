/* Declare and initialize variables */
/* var Nameofthevariable = value of the variable */
/* for instance var circleX = 50; */
var circleX = 0;

/* Set up the Canvas */
function setup() {
  createCanvas(400, 400);
  
  /* Color the background once */
  background(200, 0, 220);

}

/* Set up the draw function over and over */
function draw() {
  /* Color the background over and over */
  //background(R,G,B);
  
  /* Draw a line on the background */
  line(40, 0, 400, 340);
  
  /* Draw a rectangle on the line in the middle of the Canvas */
  rectMode(CENTER);
  
  /* Fill the interior of the rectangle */
  fill(0, 0, 255);
  
  /* Color the outline of the rectangle */
  stroke(0, 255, 0);
  strokeWeight(8);
  
  /* Draw the rectangle */
  rect(200, 150, 150, 150);
  
  /*Draw a ellipse*/
  fill(random(0, 255), random(0, 255), random(0 ,255));
  noStroke();
  ellipse(circleX, 200, 25, 25);
  
  circleX= circleX + 1;
}

/* Set up an event function, happens only if the user pressed the mouse */
function mousePressed() {
  background(200, 0, 220);
  createP("Het winnende getal is " + random(0, 100) + ".");
}

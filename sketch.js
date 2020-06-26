/* Declare and initialize variables */
/* var Nameofthevariable = value of the variable */
/* for instance var circleX = 50; */
var circleX = 0;
var bgcolor;
var button;
var h1;
var input;
var slider;

/* Set up the Canvas */
function setup() {
  createCanvas(400, 400);
  
  /* Color the background once */
  bgcolor = color(200, 0, 220);
  createP("");
  button = createButton("Klik hier om de kleur te veranderen.");
  
  createP("");
  slider = createSlider(150, 200, 175);
  createP("");
  input = createInput ('type hier je naam');
  h1 = createElement('h1', 'Als je op de muis klikt verandert deze tekst. Als je op klik hier klikt verandert de achtergrond van de canvas.'); 
}

function changeColor() {
  bgcolor = color(random(255), random(255), random(255));
}

/* Set up the draw function over and over */
function draw() {
  
  /* Color the background over and over */
  background(bgcolor);
  
  /* Draw a line on the background */
  line(40, 0, 400, 340);
  
    /* Draw the name */
  text("Hello", 200, 50);
  
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
  ellipse(circleX, 200, slide.value(), slide.value());
  
  circleX= circleX + 1;
  
  button.mousePressed(changeColor);
  
}

/* Set up an event function, happens only if the user pressed the mouse */
function mousePressed() {
  h1.html("Hieronder de winnende getallen:");
  createP("Het winnende getal is " + random(0,10) + ".");
}

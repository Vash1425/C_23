

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(255,230,0); 
  
  rect = createSprite(50, 589, 30, 400);
  
  rect = createSprite(550, 589, 30, 400);
  rect = createSprite(290, 510, 500 ,20);
  rect.shapeColor = color("black")
  rect =  createSprite(300, 350, 190 ,300);
  rect.shapeColor = color("black")
  rect =  createSprite(70, 375, 100 ,250);
  rect.shapeColor = color("black")
  rect =  createSprite(530, 375, 100 ,250);
  rect.shapeColor = color("black")
  rect =  createSprite(160, 320, 20 ,390);
  rect.shapeColor = color("brown")  
  rect =  createSprite(440, 315, 20 ,390);
  rect.shapeColor = color("brown")  

  fill("yellow")
  strokeWeight(7);
  circle(160,94,67);
  strokeWeight(7);
  circle(440,94,67);

  fill("red")
  strokeWeight(7);
  circle(70,188,150);
  fill("red")
  strokeWeight(7);
  circle(530,188,150);

  triangle(208, 197, 392, 197, 300, 70);

  
  

 
  drawSprites();
}
function preload() {
  bgImage=loadImage("snow2.jpg")
  snowflakeImage=loadImage("Snowflake.png")
}
function setup() {
  createCanvas(800,400);
  bg=createSprite(400, 200, 400, 400);
  bg.addImage(bgImage)
  snow=createSprite(400,200,50,50)
  snow.addImage(snowflakeImage)
  snow.velocityY=2
  snow.scale=0.5;

  snow2=createSprite(100,200,50,50)
  snow2.addImage(snowflakeImage)
  snow2.velocityY=2
  snow2.scale=0.5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
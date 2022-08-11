var ship, ship_moving;
var sea, seaImage;
var barreira;

function preload() {
  seaImage = loadImage("sea.png");
  ship_moving = loadAnimation(
    "ship-1.png",
    "ship-2.png",
    "ship-3.png",
    "ship-4.png"
  );
}

function setup() {
  createCanvas(500, 400);
  sea = createSprite(100, 180, 5000, 10);
  sea.addImage("mar", seaImage);
  sea.velocityX = -6;
  sea.scale = 0.4;

  ship = createSprite(200, 200, 40, 50);
  ship.addAnimation("navegando", ship_moving);
  ship.scale = 0.2;

}

function draw() {
  background("blue");
  drawSprites();
  if (sea.x < -5) {
    sea.x = sea.width/2;
  }
  if (ship.y > 400) {
    ship.y = 50;
  }
  }
  ship.velocityY = ship.velocityY + 0.5;
 

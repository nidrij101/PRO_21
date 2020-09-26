var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1400, 200, thickness, 200);
  wall.shapeColor = (80,80,80)

  thickness = random(22,83);
}

function draw() {
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  background(255,255,255);  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}
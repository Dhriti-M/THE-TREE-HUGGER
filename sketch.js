var moving_rect ,fixed_rect,rect1;
var rect , rect2;



function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 50, 50);
  moving_rect.shapeColor="red";

  fixed_rect=createSprite(400,100,50,50);
  fixed_rect.shapeColor="red";

  rect1=createSprite(100,100,50,60);
  rect1.shapeColor="red";

  rect=createSprite(10,100,50,60);
  rect.velocityX=3;

  rect2=createSprite(700,100,50,60);
  rect2.velocityX=-3;
 

}

function draw() {
  background(255,255,255);
  moving_rect.x=mouseX;
  moving_rect.y=mouseY;
  
  if (collisioncheck(moving_rect,fixed_rect)){
    moving_rect.shapeColor="yellow";
    fixed_rect.shapeColor="yellow";

  }
  else if (collisioncheck(moving_rect,rect1)){
    moving_rect.shapeColor="yellow";
    rect1.shapeColor="yellow";
}

  else{
    moving_rect.shapeColor="red";
    fixed_rect.shapeColor="red";
    rect1.shapeColor="red";
  }

  bounceoff(rect,rect2);

  drawSprites();
}


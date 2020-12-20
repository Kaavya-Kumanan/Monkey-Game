var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, groundImage;
var survivalTime=0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  FoodGroup = createGroup();
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        jumpSound.play();
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  FoodGroup.setLifetimeEach(-1);
  FoodGroup.add(banana);
  obstacleGroup.setLifetimeEach(-1);
  obstacleGroup.add(obstacle);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("survival time" + survivalTime, 500,50)
  drawSprites();
}

function spawnBananas(){
 if (frameCount % 80 === 0){
   banana = createSprite(600,165,10,40);
   banana.addImage = bananaImage;
   banana.velocityX = -(6 + score/100);
   var rand = Math.round(random(120,200));
   banana.scale = 0.5;
   banana.lifetime = 300;
 }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,165,10,40);
   obstacle.addImage = obstacleImage;
   obstacle.velocityX = -(6 + score/100);
   var rand = Math.round(random(1,6));
   obstacle.scale = 0.5;
   obstacle.lifetime = 300;
 }
}

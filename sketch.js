var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var ground
var score

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
   monkey = createSprite(50,350,20,20)
  monkey.addAnimation("monkeyrun",monkey_running)
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1200,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  
 FoodGroup= new Group(); 
  obstacleGroup = new Group();
  
 score=0
}


function draw() {
  background(300)
  
  
  stroke("black")
  textSize(20)
  fill("black")
  text("score:" + score,400,50)
  
   stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivalTime,100,50);

  
    stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivalTime,100,50);
  
  
  if(ground.x<0){
     ground.x = ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
   monkey.velocityY= monkey.velocityY+0.8 
  
  monkey.collide(ground)
  
  
  
  if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach()
    score = score+3
     }
  
  
  Spawnbanana();
   SpawnObstacles();
  
 drawSprites()
 
}
 

function Spawnbanana(){
  if(frameCount%80===0){
 banana = createSprite(300,150,20,20) 
  banana.addImage("banana", bananaImage)
    banana.scale = 0.1
   banana.x= Math.round(random(200,500))
    banana.velocityX = -1
     banana.lifetime=650;
    FoodGroup.add(banana)
  }
  
  
}

function SpawnObstacles(){
  
  if(frameCount%300===0){
 obstacle = createSprite(300,310,20,20) 
  obstacle.addImage("obstacle", obstacleImage)
    obstacle.scale = 0.2
   obstacle.x= Math.round(random(200,500))
   obstacle.velocityX = -2
    obstacle.lifetime=600;
    obstacleGroup.add(obstacle)
  }
  
  
}




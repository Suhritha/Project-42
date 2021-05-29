const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var rand;
var maxDrops=100;
var thunderCreatedFrame=0;

function preload(){
    thunderbolt1 = loadImage("1.png");
    thunderbolt2 = loadImage("2.png");
    thunderbolt3 = loadImage("3.png");
    thunderbolt4 = loadImage("4.png");
    bestMan = loadImage("Bestman-01.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,500);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400),random(0,400)));
        }
    }  
}

function draw(){
    Engine.update(engine);
    background(0); 

    random = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
         case 1: thunder.addImage(thunder1);
         break;
         case 2: thunder.addImage(thunder2);
         break; 
         case 3: thunder.addImage(thunder3);
         break;
         case 4: thunder.addImage(thunder4);
         break;
         default: break;
        }
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();

        bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
    }

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
    }

  function display(){
      thunderbolt1.display();
      thunderbolt2.display();
      thunderbolt3.display();
      thunderbolt4.display();
      umbrella.display();
      bestMan.display();
  }
}   









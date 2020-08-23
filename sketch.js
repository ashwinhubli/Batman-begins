const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = "start";

var umbrellaIMG;
var cloudImg,thunderImg;
var cloudImg
var maxDrops = 100;
var drops = [];
var img = [cloudImg,thunderImg];
function preload(){
 cloudImg = loadImage("cartoon-rain-clouds-clipart-19.png");
 umbrellaIMG = loadImage("c29a4f2186bd637dfbc087ae29d09261-man-with-umbrella-by-vexels.png");
 thunderImg = loadImage("thunder.png");
 houseImg = loadImage("row-different-houses-along-street-260nw-515925814.png");
 soundFormats('mp3','ogg');
 batSound = loadSound('LotsOfBats.mp3');
 batmanimg = loadImage("batman_by_dawidarte-d801eel.png");
 symbol = loadImage("bbb (1).png");
}

function setup(){
 canvas = createCanvas(600,650);  

    engine = Engine.create();
    world = engine.world;
    
    fill("blue");
    

  
  
  umbrella = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:false})
  World.add(world,umbrella);
   gsh = new Umbrella(350,550,40);
   
   ground = Bodies.rectangle(250, 400, 45, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);

  canvas.mousePressed(canvasPressed);
}

function draw(){
    if(gameState === "start"){
      background(0,255,255);
      fill("green");
      textSize(25)
      text("press space to view the portrait",width/2-200,height/2-200);
      text("click on the canvas to hear the bats",80,180);
      fill("black")
      textSize(28);
      text("Behold!This is the beginning of batman's story",20,height/2);
      image(batmanimg,width/2-100,height/2,260,280);   
      image(symbol,190,-10,210,140);
    }
    if(gameState === "play"){
    background(0);
    image(houseImg,-120,280,800,400);
    if(frameCount%60===0){
      image(thunderImg,10,-210,700,550);
    }
  
    if(frameCount%1===0){
      drops.push(new Drops(random(0,630),random(20,20),2));
    }
    for (var j = 0; j < drops.length; j++) {
    
    drops[j].display();
    }
    
    image(cloudImg,20,5,250,130);
    image(cloudImg,120,10,300,120);
    image(cloudImg,320,15,250,120);
    image(cloudImg,450,10,200,120);
    image(cloudImg,0-20,15,200,120);

    image(umbrellaIMG,300,500,140,140);
    //nsm.display();
   //gsh.display();
//gsh.display();
  

    drawSprites();
  }
  }
function canvasPressed(){
  batSound.play();
}
function keyPressed(){
  if(keyCode = 32){
    gameState = "play";
  }
}   


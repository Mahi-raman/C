
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1 = creatSprite(600,200,50,50);
var bobObject2 = creatSprite(660,260,50,50);
var bobObject3 = creatSprite(710,310,50,50);
var bobObject4 = creatSprite(760,360,50,50);
var bobObject5 = creatSprite(810,410,50,50);

var line = creatSprite(100,100,500,10);

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
  
}


function draw() {





bobObject1.display ();
bobObject2.display ();
bobObject3.display ();
bobObject4.display ();
bobObject5.display ();

















  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




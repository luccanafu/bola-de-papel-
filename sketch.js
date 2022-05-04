
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	Matter.Bodies.circle(400,350,200,ball_options);
	
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	var options = {
		isStatic: true
	  }

	Engine.run(engine);
  
	

}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
  	drawSprites();
  
	  
	  groundObj.display();
	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce (0.2)
	
	}
}


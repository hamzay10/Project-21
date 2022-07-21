
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var floor
var ball
var leftwall
var rightwall



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world

	//Create the Bodies Here.
	ball = new paperBall(100,600,10.4);

	floor = new Ground(400,680,800,20);
	
	leftwall = new garbageBin(500,620,20,100);

	rightwall = new garbageBin(670,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ball.display();
  floor.display();
  leftwall.display();
  rightwall.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15,y:-15})
	}
}




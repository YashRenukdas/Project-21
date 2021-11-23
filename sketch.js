
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatis: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
   ball = Bodies.circle(260,100,2,ball_options);
   World.add(world, ball);

   groundObj = new ground(width/2,600,width,20);
   leftSide = new ground(1000,550,20,120);
   rightSide = new ground(1250,550,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  rightSide.display();
  leftSide.display();

  ellipse(ball.position.x,ball.position.y,radius,radius);
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
  }
}


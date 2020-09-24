
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground,ball,pap,dust,dustI;

function preload()
{
	dustI = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(400,490,800,20);
	dustbin1 = createSprite(750,430,20,100);
	dustbin2 = createSprite(700,470,100,20);
	dustbin3 = createSprite(650,430,20,100);
	dust = createSprite(700,400,0,0);
	dust.addImage(dustI);
	dust.scale = 0.5;
	dust.opacity=0.5;

	ball = new paper(100,250,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ball.collide(ground);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position ,{x:85,y:-85});
	}
}


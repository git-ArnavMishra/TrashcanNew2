const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bucket;
var ball;
var world;
var left_s;
var right_s;
var basket;
var backImage;

function preload()
{
	backImage = loadImage("sprites/white1.jpg")
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	engine.world.gravity.y = 1.1;
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	ball = new Paper(200,height-22,22);
	
	

//	left_s = new Basket(800,height-60,20,100);
//	right_s = new Basket(900,height-135,20,250);
	basket = new Basket(850,height-50,100,100);

	
	

	//reate the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImage);
  //background(0);
  ground.display();
  //left_s.display();
  //right_s.display();
  ball.display();
  basket.display();
  ball.r = 11;
  
  //Engine.update(engine);
  //keyPressed();
  if (ball.body.position.x >700){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:0.6}); 
  }
  var d = dist (ball.body.position.x,ball.body.position.y,basket.body.position.x,basket.body.position.y);
  console.log(d);
  console.log(ball.r);
  console.log(basket.r);
  if(d<ball.r+basket.height/2+10){
	ball.body.position.x=1;
	console.log("collisionHappened");
  }
//Matter.Events.on(engine,'collisionstart', function (event) {

//	ball.x = 10000;
//	console.log("collisionHappened");

//});
  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.2,y:-2.45
		});
		
	}
}

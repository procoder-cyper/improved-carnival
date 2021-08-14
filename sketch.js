var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	
	packageSprite=createSprite(width/2,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	ground = createSprite(width/2,700,width,10)
	ground.shapeColor = 'blue'

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);


	

	box2 = new Box(500,650,20,100);

	box3 = new Box(295,650,20,100);
	box1 = new Box(400,690,200,20);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
}
	function keyPressed(){
if(keyCode === RIGHT_ARROW){
  helicopterSprite.x = helicopterSprite.x + 5
 translation = {x:5,y:0}
 Matter.Body.translate(packageBody,translation)
  }
 else if(keyCode === LEFT_ARROW){
 helicopterSprite.x = helicopterSprite.x - 5
 translation = {x:-5,y:0}
 Matter.Body.translate(packageBody,translation)
	
 }
	
 else if(keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	}
  
	
	
}



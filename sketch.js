var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box_line1,box_line2,box_line3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;consol
const Body = Matter.Body;
var b1,b2,b3
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	rectMode(CENTER);
	b1= createSprite(350,630,20,50)
	b2 = createSprite(width/2,650,120,10)
	b3 = createSprite(450,630,20,50)
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	b1 = Bodies.rectangle(370,630,20,50, {isStatic:true} );
	World.add(world, b1);

	b2 = Bodies.rectangle(width/2,660,120,10, {isStatic:true} );
	World.add(world, b2);

	b3 = Bodies.rectangle(430,630,20,50, {isStatic:true} );
	World.add(world, b3);
	Engine.run(engine);
   }


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	 Matter.Body.setStatic(packageBody,false); 
	}
  }





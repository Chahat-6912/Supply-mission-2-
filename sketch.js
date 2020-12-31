var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("white")
	wallS = createSprite(300,600,10,100)
wallS.shapeColor=color("red")
	wall1S = createSprite(500,600,10,100)
    wall1S.shapeColor=color("red")
    wall3S = createSprite(400, 655, 210, 10)
	wall3S.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;


wall = Bodies.rectangle(300, 600, 10, 100 , {isStatic:true} );
World.add(world, wall);

wall1 = Bodies.rectangle(500, 600, 10, 100 , {isStatic:true} );
World.add(world, wall1);

wall3 = Bodies.rectangle(400, 655, 210, 10 , {isStatic:true} );
World.add(world, wall3);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	var optionBall = {
		restitution : 1.0,
		friction : 0.3
	  }
	  ball = Bodies.circle(300, 100, 50, optionBall);
	  World.add(world, ball);
	 
	  
	  //console.log(object.type);
	  //console.log(object.position.x);
	  //console.log(object.position.y);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === LEFT_ARROW) { 
		 helicopterSprite.x=helicopterSprite.x-20; 
		 translation={x:-20,y:0}
		  Matter.Body.translate(packageBody, translation)
		 } 
		 
		 else if (keyCode === RIGHT_ARROW) { 
			 helicopterSprite.x=helicopterSprite.x+20; 
			 translation={x:20,y:0} 
			 Matter.Body.translate(packageBody, translation) 
			} 
			
			else if (keyCode === DOWN_ARROW) { 
				Matter.Body.setStatic(packageBody,false); 
			} 
		}




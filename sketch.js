const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;

  var engine,world;
var v1,v2,ball,ground,ball1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  //v1 = createSprite (400, 200, 50, 50);
  ball = Bodies.rectangle(300,150,50,50);
   World.add(world,ball);
   var options = { 
     isStatic : true }

   ground = Bodies.rectangle(200,380,400,20,options);
   World.add(world,ground);
   console.log(ground.position.x)
   console.log(ground.position.y)
   var options = { 
    restitution : 1.0 }
   ball1 = Bodies.circle(150,10,40,options);
   World.add(world,ball1);
  

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(ball1.position.x,ball1.position.y,40,40);
  drawSprites();
}
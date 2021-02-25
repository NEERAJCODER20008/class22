const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies




function setup(){
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world
var groundOptions={
  isStatic:true,
}
 ground=Bodies.rectangle(400,380,800,20,groundOptions)

 World.add(world,ground);
 var ballOptions={
   restitution:0.5
 }
 ball = Bodies.circle(400,200,40,ballOptions)
 World.add(world,ball);

}

function draw() {
  background("black"); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,80,80)
}
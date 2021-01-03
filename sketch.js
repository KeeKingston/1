const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var Ground,ball,b2,b3,r2,r3,rope;

function preload(){

}

function setup(){
createCanvas(900,800);
 engine=Engine.create();
world=engine.world;
   
Ground= new ground(400,25,400,20);

ball= new Ball(250,200,80,80);
rope= new Rope(ball.body,{x:250,y:40});
b1= new Ball(350,200,80,80);
r1= new Rope(bl.body,{x:350,y:40});
b2= new Ball(450,200,80,80);
r2= new Rope(b2.body,{x:450,y:40});
b3= new Ball(550,200,80,80);
r3= new Rope(b3.body,{x:550,y:40});

 }

function draw(){
 
 background(0);
 Engine.update(engine);
Ground.display();
ball.display();
rope.display();
b1.display();
r1.display();
b2.display();
r2.display();
b3.display();
r3.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
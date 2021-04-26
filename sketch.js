const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var box1, Rock1,Rock3;
var backgroundImg,platform;
var bird, slingshot;
var flag=0;


var gameState = "onSling";

function preload()
{
    bg= loadImage("images/bg.jpg")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(120,350,70,70);
    box2 = new Box(180,350,70,70);
   
    box3 = new Box(240,350,70,70);
    box4 = new Box(300,350,70,70);
    
    box5 = new Box(360,350,70,70);
    Rock1 = new Rock(1000, 350);
  
   
   rope1 = new SlingShot(box1.body,box2.body)
   rope2 = new SlingShot(box2.body,box3.body)
   rope3 = new SlingShot(box3.body,box4.body)
   rope4 = new SlingShot(box4.body,box5.body)

}

function draw(){

    background(bg);
    
    Engine.update(engine);
  
    
   
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();

    box1.display();
    box2.display();
    ground.display();
    Rock1.display();

    box3.display();
    box4.display();
    box5.display();

  var colission=Matter.SAT.collides(box5.body,Rock1.body)
 if(colission.collided)
 {
     flag = 1;
 }
 if(flag==1)
 {
     text("CRASHED",605,129)
 }


    textSize(30);
    text("x : "+mouseX+" y :" +mouseY,mouseX,mouseY)
}



function keyPressed()
{
   if(keyCode === RIGHT_ARROW)
   {
    
     Matter.Body.applyForce(box5.body,box5.body.position,{x:600,y:0})
   }
}
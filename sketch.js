const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground;
var platform1,platform2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,slingShot;
function setup() {
  createCanvas(1350,600);
  engine=Engine.create();
  world=engine.world;
 

  ground=new Ground(675,590,1350,20);
  platform1=new Ground(650,430,300,10);
  platform2=new Ground(1100,200,200,10);

  block1=new Box(560,405,30,40);
  block2=new Box(590,405,30,40);
  block3=new Box(620,405,30,40);
  block4=new Box(650,405,30,40);
  block5=new Box(680,405,30,40);
  block6=new Box(710,405,30,40);
  block7=new Box(740,405,30,40);
  
  block8=new Box(590,385,30,40);
  block9=new Box(620,385,30,40);
  block10=new Box(650,385,30,40);
  block11=new Box(680,385,30,40);
  block12=new Box(710,385,30,40);

  block13=new Box(620,365,30,40);
  block14=new Box(650,365,30,40);
  block15=new Box(680,365,30,40);

  block16=new Box(650,345,30,40);

  block17=new Box(1040,175,30,40);
  block18=new Box(1070,175,30,40);
  block19=new Box(1100,175,30,40);
  block20=new Box(1130,175,30,40);
  block21=new Box(1160,175,30,40);

  block22=new Box(1070,155,30,40);
  block23=new Box(1100,155,30,40);
  block24=new Box(1130,155,30,40);

  block25=new Box(1100,135,30,40);
  polygon=new Polygon();
  slingShot=new SlingShot(polygon.body,{x:200,y:340});

  Engine.run(engine);
}

function draw() {
  background(0); 
  rectMode(CENTER); 
  ground.display();
  platform1.display();
  platform2.display();
  fill("lightgreen");
  block1.display();
  block2.display();
  block3.display();
block4.display();  
block5.display();
  block6.display();
  block7.display();

  fill("lightpink");
  block8.display();
  block9.display();  
  block10.display();
    block11.display();
    block12.display();

    fill("lightblue");
    block13.display();
    block14.display();
    block15.display();

    fill("lightpink");
    block16.display();

    fill("lightgreen");
    block17.display();
    block18.display();  
    block19.display();
      block20.display();
      block21.display();
  
      fill("lightblue");
      block22.display();
      block23.display();
      block24.display();
  
      fill("lightpink");
      block25.display();
      polygon.display();
      slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:200,y:350});
    slingShot.attach(polygon.body);
  }
}
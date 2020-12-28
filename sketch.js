const Engine = Matter.Engine //universe
const World = Matter. World 
const Bodies = Matter . Bodies 
var myEngine,myWorld,box1,box2,box3,box4,box6,grd;
var pig1,pig2, log1,log2,log3,log4;
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();//.world
  myWorld= myEngine.world;
 box1 = new Box(700,320,70,70)// created a box

 box2 = new Box(900,320,70,70)//creating 2nd box
 box3 = new Box(700,170,70,70)
 box4 = new Box(900,170,70,70)
 box6 = new Box(800,140,70,70)

 grd = new Ground() //creating ground

 pig1 = new Pig(800,320)
 pig2 = new Pig(800,175)

 log1 = new Log(800,180,300,PI/2)
 log2 = new Log(790,140,300,PI/2)
 log3 = new Log(750,135,150,PI/7)
 log4 = new Log(820,135,150,-PI/7)

}

function draw() {
  background(0); 
Engine.update(myEngine)
box1.display();

box2.display();
box3.display();
box4.display();
box6.display();
grd.display();
 
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();
} 
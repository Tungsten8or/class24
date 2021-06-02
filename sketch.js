const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(100,100,30,30)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1=new Pig(810,350,30,30);
    log1=new Log(810,260,20,300,PI/2)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3=new Pig(810,220,30,30);
    log3=new Log(810,180,20,300,PI/2)
    box5=new Box(810,160,70,70);
    log4 = new Log(760,120,20,150,PI/7)
    log5 = new Log(870,120,20,150,-PI/7)
    ground = new Ground(200,height,2000,20);
}

function draw(){
    background("#5BBBD4");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box4.display();
    box3.display();
    bird.display();
   
    log1.display();
    pig1.display();
    log3.display();
    pig3.display();
    box5.display();
    log4.display();
    log5.display();

    
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log,log1,log2,log3;
var bird1;
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,600,70,70);
    box2 = new Box(1100,600,70,70);
    box3 = new Box(900,500,70,70);
    box4 = new Box(1100,500,70,70);
    box5=new Box(1000,400,70,70)
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(1000,600)
    pig2=new Pig(1000,500)
    log=new Log(1000,550,270,PI/2)
    log1=new Log(1000,450,270,PI/2)
    log2=new Log(950,350,140,PI/4)
    log3=new Log(1050,350,140,-PI/4)
    bird1=new Bird(200,500)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box4.display();
    box3.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log.display();
    log1.display();
    log2.display();
    log3.display();
    bird1.display();
}
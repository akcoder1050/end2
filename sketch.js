const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var alien1 , alien2 , alien3 , alien4 , alien5 , alien6 ;

var wall1 , wall2 , wall3 , wall4 , wall5 , wall6 , wall7  ;

var  dis1 , dis2 , dis3 , dis4;

var Thor , IronMan , Hulk , SpiderMan , CaptainAmerica;

var MindStone , PowerStone , SoulStone , SpaceStone , TimeStone , RealityStone;

var Backgroundimg , FormBackground;

var BounsyAliens1 , BounsyAliens2;

var Instructions;

var Restart;

var heroes;

var Villain;

var Thanos , ThanosLoss;

var IronManwon;

var aliensImg;

var Stones;

var wheel1 , wheel2 , wheel3 , wheel4 , wheel5 , wheel6;

//var AliensGang;


function preload() {
  Backgroundimg = loadImage("images/Background.PNG");
  //Aliens = loadImage("../images/Aliens.PNG");
 //AliensGang = loadImage("../images/Aliens Gang.PNG");
 //BounsyAliens1 = loadImage("../images/Bounsy Aliens 1.PNG");
 //BounsyAliens2 = loadImage("../images/Bounsy Aliens 2.PNG");
 //CaptainAmerica = loadImage("../images/Captain America.PNG");
 //FormBackground = loadImage("images/Form Background.PNG");
 //Hulk = loadImage("../images/Hulk.PNG");
 //Instructions = loadImage("../images/Instructions.PNG");
 // IronManwon = loadImage("../images/Iron Man won.PNG");
 //IronMan = loadImage("../images/Iron Man.PNG");
 //MindStone = loadImage("../images/Mind Stone.PNG"); 
 //PowerStone = loadImage("../images/Power Stone.PNG");
 //RealityStone = loadImage("../images/Reality Stone.PNG");
 //Restart = loadImage("../images/Restart.PNG");
 //SoulStone = loadImage("../images/Soul Stone.PNG");
 //SpaceStone = loadImage("../images/Space Stone.PNG");
 // SpiderMan= loadImage("../images/Spider Man.PNG");
 //ThanosLoss = loadImage("../images/Thanos Loss.PNG");
 //Thanos = loadImage("../images/Thanos.PNG");
 //Thor = loadImage("../images/Thor.PNG");
 //timeStoneImg = loadImage("../images/TimeStone.PNG");
}

function setup(){
  var canvas = createCanvas(2000,1500);
   engine = Engine.create();
   world = engine.world;

      alien1 = new Alien( 40 , 1200 , 70 , 70 );
      alien2 = new Alien( 40 , 1000 , 70 , 70 );
      alien3 = new Alien( 40 , 800  , 70 , 70 );
      alien4 = new Alien( 415 , 800  , 70 , 70 );
      alien5 = new Alien( 415 , 1000 , 70 , 70 );
      alien6 = new Alien( 415 , 1200 , 70 , 70 );
   
      wall1 = new Wall( 1000 , 550 , 1099 , 10 );
      wall2 = new Wall( 455 , 1100 , 10 , 1110 );
      wall3 = new Wall( 1544 , 963 , 10 , 835 );
      wall4 = new Wall( 1000 , 1500 , 2000 , 10 );
      wall5 = new Wall( 5 , 750 , 10 , 1530 );
      wall6 = new Wall( 1000 , 5 , 2000 , 10 );
      wall7 = new Wall( 2000 , 750, 10 , 1530 );
    
      wheel1 = new Wheel( 450 , 300 , 300 ,30 ); 
      wheel2 = new Wheel( 450 , 300 , 300 ,30 ); 
      wheel3 = new Wheel( 450 , 300 , 300 ,30 ); 
      wheel4 = new Wheel( 450 , 300 , 300 ,30 );
      wheel5 = new Wheel( 450 , 300 , 300 ,30 ); 
      wheel6 = new Wheel( 450 , 300 , 300 ,30 );
      
      dis1 = new Disappearing( 1544 , 1440 , 10 , 120 );
      dis2 = new Disappearing( 850 , 271 , 10 , 550 );
      dis3 = new Disappearing( 225 , 550 , 450 , 10 );
      dis4 = new Disappearing( 1774 , 550 , 450 , 10 );

      heroes = new Hero();
      stones = new Stone();
      Villain = new Villains();

  var render = Render.create({ element: document.body,
     engine: engine,
     options: { width: 2000, height: 1500, wireframes: false, } });
        Engine.run(engine);
        Render.run(render);
   
  //text( mouseX+" , "+mouseY , mouseX , mouseY );
   
}

function draw(){

   background(Backgroundimg);
     Engine.update(engine);

       alien1.display();
       alien2.display();
       alien3.display();
       alien4.display();
       alien5.display();
       alien6.display();
    
       wall1.display();
       wall2.display();
       wall3.display();
       wall4.display();
       wall5.display();
       wall6.display();
       wall7.display();
 
       wheel1.display();
       wheel2.display();
       wheel3.display();
       wheel4.display();
       wheel5.display(); 
       wheel6.display();
   
       dis1.display();
       dis2.display();
       dis3.display();
       dis4.display();
 
       heroes.display();
       stones.display();
       Villain.display();
   
}
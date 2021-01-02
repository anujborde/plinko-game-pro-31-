
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos=[]
var particle=[]
var divisions=[]

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

ground=new Ground(400,790,800,10)
var divisionHeigth=300
for(var k =0 ; k<=width;k=k+80){

  divisions.push(new Division(k,height-divisionHeigth/2,10,divisionHeigth))
}

if(frameCount%60===0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10))
}

for(var p=40;p<=width;p=p+50){
plinkos.push(new Plinko(p,75,10))

}
for(p=30;p<=width-10;p=p+50){
  plinkos.push(new Plinko(p,175,10))
}

for(p=20;p<=width-20;p=p+50){
  plinkos.push(new Plinko(p,275,10))
}

for(p=10;p<=width-30;p=p+50){
  plinkos.push(new Plinko(p,375,10))
}


}

function draw() {
  background(0); 

  Engine.update(engine);
  ground.display();
  
for(var p=0;p<plinkos.length;p++){
  plinkos[p].display();
}

for(var j=0;j<divisions.length;j++){
  divisions[j].display();
}

if(frameCount%60===0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10))
}

  for(var k=0;k<particle.length;k++){
    particle[k].display();
  
}
}



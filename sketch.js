var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bottomSprite,leftSprite,rightSprite;
var packageBody,ground,bottom,left,right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);
    // bottomSprite=createSprite(width/2, height-46,180,15)
    // bottomSprite.shapeColor="red"
    engine = Engine.create();
    world = engine.world;

    bottom=new Side(width/2, height-49,180,15,640);
    left=new Side((width/2)-90,height-65,15,60,height-73);
    right=new Side((width/2)+90,height-65,15,60,height-73);
    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    // leftSprite=createSprite((width/2)-90,height-65,15,60)
    // leftSprite.shapeColor="red"
    //
    // rightSprite=createSprite((width/2)+90,height-65,15,60)
    // rightSprite.shapeColor="red"

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)



    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1,friction:1, isStatic:true});
    World.add(world, packageBody);
    // left=Bodies.rectangle((width/2)-90,height-65,15,60,{isStatic:true})
    // World.add(world,left);
    // right=Bodies.rectangle((width/2)+90,height-65,15,60,{isStatic:true})
    // World.add(world,right);
    // bottom=Bodies.rectangle(width/2, 643,180,15,{isStatic:true})
    // World.add(world,bottom);
    ground = Bodies.rectangle(width/2, 650, 180, 10 , {isStatic:true} );
    World.add(world, ground);


    Engine.run(engine);

}


function draw() {
    Engine.update(engine)
    rectMode(CENTER);
    background(0);
    this.left.sprite.x=this.left.body.position.x;
    this.right.sprite.x=this.right.body.position.x;
    this.bottom.sprite.x=this.bottom.body.position.x;
    this.left.sprite.y=this.left.body.position.y;
    this.right.sprite.y=this.right.body.position.y;
    // this.bottom.sprite.y=this.bottom.body.position.y;

    packageSprite.x= packageBody.position.x
    packageSprite.y= packageBody.position.y;
    drawSprites();

}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        // Look at the hints in the document and understand how to make the package body fall only on
        Matter.Body.setStatic(packageBody,false)
    }
}


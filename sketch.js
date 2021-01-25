var catrest, catmove, catsit, tom
var mourest, moumove, mousit, jerry
var garden, bacgarden

function preload() {
    //load the images here
    catrest=loadImage("cat1.png")
    catmove=loadAnimation("cat2.png","cat3.png")
    catsit=loadImage("cat4.png")
    garden=loadImage("garden.png")
    mourest=loadImage("mouse1.png")
    moumove=loadAnimation("mouse2.png","mouse3.png")
    mousit=loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bacgarden=createSprite(500,400,10,10)
    bacgarden.addImage("background",garden)
    tom=createSprite(900,200,10,10)
    tom.addImage("rest",catrest)
    jerry=createSprite(100,200,10,10)
    jerry.addImage("Rest",mourest)

}

function draw() {

    //background(255);
    keyPressed()
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<tom.width/2+jerry.width/2 && jerry.x-tom.x<tom.width/2+jerry.width/2
        && tom.y-jerry.y<tom.height/2+jerry.height/2 && jerry.y-tom.y<tom.height/2+jerry.height/2){
            tom.velocityX=0
            tom.addImage("sit",catsit)
            tom.changeImage("sit")
            jerry.addImage("Sit",mousit)
            jerry.changeImage("Sit")
        }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keycode === LEFT_ARROW){
        tom.velocityX= -5
        tom.addAnimation("run",catmove)
        tom.changeAnimation("run")
        jerry.addAnimation("Run",moumove)
        jerry.changeAnimation("Run")
    }


}

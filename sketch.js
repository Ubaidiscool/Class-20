var fRect,mRect

function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
 mRect=createSprite(350,150,50,50)
 mRect.debug=true
 fRect.debug=true
 mRect.shapeColor="green"
 fRect.shapeColor="green"
}

function draw() {
  background("black");  
  mRect.x=mouseX
  mRect.y=mouseY
  console.log("hello")
  if (mRect.x-fRect.x<=mRect.width/2+fRect.width/2 && 
    fRect.x-mRect.x <=mRect.width/2+fRect.width/2 && 
    mRect.y-fRect.y<=mRect.height/2+fRect.height/2 &&
    fRect.y-mRect.y<=mRect.height/2+fRect.height/2){

    mRect.shapeColor="red"
    fRect.shapeColor="red"
    console.log("hi")
  }
  else{
    mRect.shapeColor="yellow"
    fRect.shapeColor="yellow"

  }

  drawSprites();
}
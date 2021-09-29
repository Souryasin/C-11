var sea,seaImage
var moving_boat
var boat 

function preload(){
  moving_boat=loadAnimation('ship-1.png','ship-2.png',"ship-3.png","ship-4.png")
  seaImage=loadImage('sea.png')
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200,20,20)
 sea.addImage("moving_sea",seaImage)
  
 
 //create a ship sprite
 boat=createSprite(120,250,20,20)
 boat.addAnimation("moving",moving_boat)
 boat.scale=0.3
}

function draw() {
  background("blue")
  sea.velocityX=-3
  drawSprites()
}
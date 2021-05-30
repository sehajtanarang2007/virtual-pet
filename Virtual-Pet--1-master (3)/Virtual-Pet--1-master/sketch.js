//Create variables here
var dogimg,dog,dogimg1
var detabase
var foods,foodstock
function preload()
{
	//load images here
  dogimg = loadImage("images/Dog.png")
  dogimg1= loadImage("images/happy dog.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  dog= createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale=0.15
  foodstock=database.ref("food")
  foodstock.on("value",readstock)

}


function draw() {  
background("green")
if(keyDown("up")){
  writestock(foods)
  dog.addImage(dogimg1)
}
  drawSprites();
  //add styles here

}
function readstock(data){
  foods=data.val()
}
function writestock(x){
  database.ref("/").update({food:x})
}






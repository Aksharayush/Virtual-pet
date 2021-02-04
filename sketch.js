//Create variables here
var dog;
var foodS, foodStock;
function preload()
{
  //load images here
   dogImg = loadImage("images/dogImg.png");
   dogImg1 = loadImage("images/dogImg1.png");

  
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);


}


function draw() {  
background(46, 139, 87);
  
// Feeding the dog
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg1)
}

  drawSprites();
  //add styles here

 fill("Cyan");
 stroke("black");
 text("Food remaining = "+foodS,170,200)
textSize(13);

text("Note: Press UP ARROW to feed Bolt",130,10,300,20);
}
//function for milk left
function readStock(data){
foodS = data.val();
}

function writeStock(x){
        if(x<=0){
          x=0;
        }else{
          x= x-1;
        }

  database.ref('/').update({
    Food:x
  })
}

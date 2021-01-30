var fire, betty, jughead, blackHood, blackHood2, blackHood3, riddle1, riddle2, riddle3, serpent, blackHoodCaught;
var fireImg, riddle1Img, riddle2Img, riddle3Img, serpentImg, blackHoodCaughtImg, bettyImg, blackHoodImg, blackHoodWeaponImg, blackHood2, blackHood3Img;
var randomNumber, answer, submit;
var gameState;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, fire, serpent;

function preload(){
  fireImg = loadImage("fire.png");
  riddle1Img = loadImage("riddle1.png");
  riddle2Img = loadImage("riddle2.png");
  riddle3Img = loadImage("riddle3.jpg");
  serpentImg = loadImage("theSerpents.jpg");
  blackHoodCaughtImg = loadImage("blackHoodCaught.png");
  bettyImg = loadImage("bettyRunning.jpg");
  blackHoodImg = loadImage("blackHood.jpg");
  blackHood2Img = loadImage("blackHood2.jpg");
  blackHood3Img = loadImage("blackHood3.jpg");
  blackHoodWeaponImg = loadImage("blackHoodWeapon.jpg")
  
}

function setup() {
  createCanvas(800,700);
   randomNumber = Math.round(random(1,3))
   answer = createInput("Enter The Answer Here in Small Letters");
   submit = createButton("Click to Submit");
   gameState = "start";
  // gameState = "new"
  wall1 = createSprite(70, 40, 20, 70);
  wall1.shapeColor = "red";
  wall2 = createSprite(50, 120, 100, 20);
  wall2.shapeColor = "red";
  wall3 = createSprite(155, 120, 20, 100);
  wall3.shapeColor = "red";
  wall4 = createSprite(155, 220, 100, 20);
  wall4.shapeColor = "red";
  wall5 = createSprite(320, 220, 130, 20);
  wall5.shapeColor = "red";
  wall6 = createSprite(340, 280, 20, 100);
  wall6.shapeColor = "red";
  wall7 = createSprite(230, 330, 20, 100);
  wall7.shapeColor = "red";
  wall8 = createSprite(50, 220, 20, 100);
  wall8.shapeColor = "red";
  wall9 = createSprite(70, 320, 80, 20);
  wall9.shapeColor = "red";
  wall10 = createSprite(160, 280, 20, 100);
  wall10.shapeColor = "red";
  wall11= createSprite(280, 350, 20, 100);
  wall11.shapeColor = "red";
  wall12 = createSprite(90, 360, 20, 60);
  wall12.shapeColor = "red";
  wall13 = createSprite(210, 160, 100, 20);
  wall13.shapeColor = "red";
  wall14 = createSprite(320, 120, 20, 100);
  wall14.shapeColor = "red";
  wall15 = createSprite(220, 60, 20, 120);
  wall15.shapeColor = "red";   
  fire = createSprite(80, 550, 10, 10);
  fire.addImage(fireImg);
  fire.scale = 0.3;
  serpent = createSprite(730, 550, 10, 10);
  serpent.addImage(serpentImg);
  serpent.scale = 0.3;
  betty = createSprite(20, 20, 18, 18);
  betty.addImage(bettyImg);
  betty.scale = 0.08;
  
  blackHood = createSprite(370, 10, 18, 18);
  blackHood.setVelocity(2, 5);
  blackHood.addImage(blackHoodImg);
  blackHood.scale = 0.1;

  blackHood2 = createSprite(300, 500, 18, 18);
  blackHood2.setVelocity(2, 5);
  blackHood2.addImage(blackHood3Img);
  blackHood2.scale = 0.1;
}


function draw() {
  background("yellow"); 
  edges = createEdgeSprites();
  
  

  if(gameState === "win"){
    image(blackHoodCaughtImg, 300, 300);
    answer.hide();
    submit.hide();
  }
  if(gameState === "new"){
    drawSprites();
    answer.hide();
    submit.hide();
   
//betty.bounceOff(edges);
if (keyDown("LEFT_ARROW")) {
  betty.velocityX = -2;
  betty.velocityY = 0;
}
if (keyDown("RIGHT_ARROW")) {
  betty.velocityX = 2;
  betty.velocityY = 0;
}
if (keyDown("DOWN_ARROW")) {
  betty.velocityX = 0;
  betty.velocityY = 2;
}
if (keyDown("UP_ARROW")) {
  betty.velocityX = 0;
  betty.velocityY = -2;
}
if (betty.isTouching(wall1) || betty.isTouching(wall2) || betty.isTouching(wall3) || betty.isTouching(wall4) || betty.isTouching(wall5) || betty.isTouching(wall6) || betty.isTouching(wall7) || betty.isTouching(wall8) || betty.isTouching(wall9) || betty.isTouching(wall10) || betty.isTouching(wall11) || betty.isTouching(wall12) || betty.isTouching(wall13) || betty.isTouching(wall14) || betty.isTouching(wall15) || betty.isTouching(serpent)) {
  betty.x = 18;
  betty.y = 18;
}

if(betty.isTouching(fire)|| betty.isTouching(serpent)){
  betty.setVelocity(4,4)
  fill('red');
  text("Find The Real Black Hood to Save Your Life", 500, 60);
}
blackHood.bounceOff(wall1);
blackHood.bounceOff(wall2);
blackHood.bounceOff(wall3);
blackHood.bounceOff(wall4);
blackHood.bounceOff(wall5);
blackHood.bounceOff(wall6);
blackHood.bounceOff(wall7);
blackHood.bounceOff(wall8);
blackHood.bounceOff(wall9);
blackHood.bounceOff(wall10);
blackHood.bounceOff(wall11);
blackHood.bounceOff(wall12);
blackHood.bounceOff(wall13);
blackHood.bounceOff(wall14);
blackHood.bounceOff(wall15);
blackHood.bounceOff(edges);
blackHood.bounceOff(fire);
blackHood.bounceOff(serpent);

betty.bounceOff(edges);

if(blackHood.isTouching(betty)){
  blackHood.addImage(blackHoodWeaponImg);
  fill('black');
  text("GAME OVER")
}

  blackHood2.bounceOff(wall1);
blackHood2.bounceOff(wall2);
blackHood2.bounceOff(wall3);
blackHood2.bounceOff(wall4);
blackHood2.bounceOff(wall5);
blackHood2.bounceOff(wall6);
blackHood2.bounceOff(wall7);
blackHood2.bounceOff(wall8);
blackHood2.bounceOff(wall9);
blackHood2.bounceOff(wall10);
blackHood2.bounceOff(wall11);
blackHood2.bounceOff(wall12);
blackHood2.bounceOff(wall13);
blackHood2.bounceOff(wall14);
blackHood2.bounceOff(wall15);
blackHood2.bounceOff(edges);
blackHood2.bounceOff(fire);
blackHood2.bounceOff(serpent);

 

if(blackHood2.isTouching(betty)){
 gameState = "won";
}
  }
  
  if(gameState === "won"){
    fill("red");
    text("YOU WON");
  }
  
  

  if(gameState === "start"){
    answer.position(500, 500);
  submit.position(500, 600);

    if(randomNumber === 1){
      image(riddle1Img, 50, 100);

    }
    else if(randomNumber === 2){
      image(riddle2Img, 50, 100);
    }
    else{
      image(riddle3Img, 50, 100, 500, 250);
    }
    submit.mousePressed(function(){
      if(randomNumber === 1 ){
        if(answer.value() === "silence"){
        gameState = "win";
        }
      }
      if(randomNumber === 2 ){
        if(answer.value() === "candle"){
        gameState = "win";
        }
      }
      if(randomNumber === 3 ){
        if(answer.value() === "keyboard"){
        gameState = "win";
        }
      }
      if(randomNumber === 1){
        if(answer.value() != "silence"){
          gameState = "new";
        }
      }
      if(randomNumber === 2){
        if(answer.value() != "candle"){
          gameState = "new";
        }
      }
      if(randomNumber === 3){
        if(answer.value() != "keyboard"){
          gameState = "new";
        }
      }
    })
    

  }

 
  

}
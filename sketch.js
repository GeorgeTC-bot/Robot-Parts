var easing = 3;
var easing2 = 70;
var rectx = 200;
var recty = 120;
var rectx2;
var body = 55;

var y = 200;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  if(rectx > mouseX - 20){
    rectx = rectx - easing;
  } 
  else if(rectx < mouseX - 30){
    rectx = rectx + easing;
  }
  
  if(mouseIsPressed){
    if(recty <= 200 - 25 - 20){
      recty = recty + 3;
      easing2 = easing2 - 1;
      easing = easing - 0.5;
      body = body - 0.5;
      y = y + 1;
    }
  }
  else{
    recty = 120;
    easing2 = 70;
    easing = easing + 0.5;
    body = 55;
    y = 200;
  }
  
  if(easing <= 1){
    easing = 1;
  }
  else if(easing >= 3){
    easing = 3;
  }
  
  if(mouseX > rectx + 25){
    rectx2 = rectx - easing2;
  }
  else if (mouseX < rectx + 25){
    rectx2 = rectx + easing2;
  }
  
  fill("black");
  line(rectx + 25,y,rectx + 25,recty);
  line(rectx,y + 20,rectx2,y+20);
  rect(rectx,y,50,body);
  rect(rectx,recty,50,40);
  rect(rectx2,y + 5,50,30);
  ellipse(rectx + 25,300,70,70);
  fill("white");
  ellipse(rectx + 25,300,50,50);
}
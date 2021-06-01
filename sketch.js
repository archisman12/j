var Jclass,Jclass1;
var Jclass,Jclass1;
var needHelpImg,needHelp;


function preload(){
bg=loadImage("bg.jpg")
JoinClassImg=loadImage("Join Class.png");
JoinClass1Img=loadImage("Join Class 1.png");
needHelpImg=loadImage("Need Help.png")

}


function setup(){
var canvas=createCanvas(displayWidth,displayHeight)
 Jclass = createSprite(displayWidth-200,displayHeight-600)
 Jclass.addImage(JoinClassImg);
 Jclass.scale=1.4
 Jclass.visible=true;

 Jclass1 = createSprite(displayWidth-210,displayHeight-595)
 Jclass1.addImage(JoinClass1Img);
 Jclass1.scale=1.4
 Jclass1.visible=false

 needHelp = createSprite(displayWidth-200,displayHeight-200)
 needHelp.addImage(needHelpImg);
 needHelp.visible=true;
 


}

function draw(){
    background(bg);
    if(mouseIsOver(Jclass)){
         Jclass.visible=false;
         Jclass1.visible=true;
        

        }else {
            Jclass1.visible=false;
         Jclass.visible=true;
        }

        if (mousePressedOver(Jclass1)){
             window.location.href = "http://www.w3schools.com";



        }
  
  
   


 drawSprites();
}
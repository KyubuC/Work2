
var size = []
var facex = []
var facey = []
var song
var songIsplay = false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
var fram = frameCount



function preload(){
  song = loadSound("123 Hartmanners Youkaier Girler.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0) 
  angleMode(DEGREES)
  for(var i=0;i<10;i++){
    size[i] = random(200,400)
    facex[i] = random(0,width)
    facey[i] = random(0,height)}
  
    music_btn = createButton("音樂跳舞")
    music_btn.position(10, 10)
    music_btn.size(windowWidth/4, windowHeight/5);
    music_btn.style('background-color', 'black');
    music_btn.style('font-size', '20px');
    music_btn.style('color', 'white');
    music_btn.mousePressed(music_btn_pressed)
    
    mouse_btn = createButton("滑鼠跳動")
    mouse_btn.position(windowWidth/2-75,10)
    mouse_btn.size(windowWidth/4, windowHeight/5);
    mouse_btn.style('background-color', 'black');
    mouse_btn.style('font-size', '20px');
    mouse_btn.style('color', 'white');
    mouse_btn.mousePressed(mouse_btn_pressed)
  
    Speech_btn = createButton("語音辨識(跳舞/不要跳)")
    Speech_btn.position(windowWidth*4/5-40,10)
    Speech_btn.size(windowWidth/4, windowHeight/5);
    Speech_btn.style('background-color', 'black');
    Speech_btn.style('font-size', '20px');
    Speech_btn.style('color', 'white');
    Speech_btn.mousePressed(Speech_btn_pressed)
  }

  function Speech_btn_pressed(){
    myRec.onResult = showResult;
    myRec.start();  
  
  }

  
function showResult()
{
	if(myRec.resultValue==true) {
	     result = myRec.resultString
         if(myRec.resultString==="跳舞")
            {
                music_btn_pressed()
             }
         if(myRec.resultString==="不要跳")
            {
 
              mouse_btn_pressed()
             }
	}
}

  
function mouse_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()  

}
function music_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false

}
function draw() {
background(100,123,243)
fill(255,0,0)
textSize(20)
push()
textSize(50)
fill(255,0,0)  
text(result,1100,100);   
pop()


for(var j=0;j<10;j++){

  push()
  noFill()
    translate(facex[j],facey[j])
    //face
    fill(255,255,255)
    ellipse(0,0,size[j])
    //nose
   
  
    //eyes
    
    eyeA = fill(0);ellipse(-size[j]/4+mouseX/40,-size[j]/4+mouseY/40,size[j]/13.66,size[j]/5.33)
    
    eyeB = fill(0);ellipse(size[j]/4+mouseX/40,-size[j]/4+mouseY/40,size[j]/13.66,size[j]/5.33)
    //mouth
    fill(255,0,0)
    
    arc(0,size[j]/8,(size[j]/4)*3,size[j]/2,0,180)

    fill(255,255,255)

    if (mouseIsPressed){
      arc(0,size[j]/8,(size[j]/4)*3,size[j]/2,0,180)

    }
    else{ 
      //arc(0,size[j]/8,(size[j]/4)*3,(size[j]/2)-30,0,180)

    }
  if(!songIsplay){
    arc(0,size[j]/8,(size[j]/4)*3,size[j]/2,0,180)
    eyeA = fill(0);ellipse(-size[j]/4+mouseX/40,-size[j]/4+mouseY/40,size[j]/13.66,size[j]/5.33)
    
    eyeB = fill(0);ellipse(size[j]/4+mouseX/40,-size[j]/4+mouseY/40,size[j]/13.66,size[j]/5.33)
  }
  else{
    vol = amp.getLevel()
    noStroke()
    eyeA = fill(255,0,0);ellipse(-size[j]/4+mouseX/40,-size[j]/4+mouseY/40,size[j]/20,size[j]/5.33)
    eyeB = fill(255,0,0);ellipse(size[j]/4+mouseX/40,-size[j]/4+mouseY/40,size[j]/20,size[j]/5.33)
    fill(255,0,0)

    arc(0,(size[j]/8),(size[j]/4)*3,map(vol,0,1,0,4)*(size[j]/2),0,360)
    fill(random(150,255),random(150,255),random(150,255));ellipse(((size[j]/100)-50)+mouseX/10,((size[j]/6)-20)+mouseY/15,size[j]/10,size[j]/3.5)
  }
  
  pop() 

}

}
function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}

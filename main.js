song=""
lwx=0
lwy=0
rwx=0
rwy=0
function start(){
    song.setVolume(1)
    song.rate(1)
    song.play()
  }
   function preload(){
song=loadSound("music.mp3")
   }
  
  
  function setup(){
      canvas=createCanvas(400,400)
      canvas.center()
          video=createCapture(VIDEO)
          video.center()
          video.hide()
          poseNet = ml5.poseNet('video' , modelLoaded)
          poseNet.on('pose',gotposes)
           }

  function modelLoaded(){
      console.log("posenet is intialized")
  }


  
  
  function draw(){
      image(video,0,0,400,400)
  }



  function gotposes(poses,error){
      if(error){
          console.error(error);
      }
 if(poses.length > 0){
     console.log(poses)
 lwx = poses[0].pose.leftWrist.x;
 lwy = poses[0].pose.leftWrist.y;
 console.log("leftwristx " + lwx + "leftwristy " + lwy);

 rwx = poses[0].pose.rightWrist.x;
 rwy = poses[0].pose.rightWrist.y;
 console.log("rightWristx " + rwx + "rightWristy " + rwy);

 }
  }
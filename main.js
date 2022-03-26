noseX = 0
noseY = 0
rightWrist = 0
leftWrist = 0
difference = 0

function setup(){
    canvas = createCanvas(550,450)
    canvas.position(580,100)

    video = createCapture(VIDEO)
    video.size(550,500)

    poseNet = ml5.poseNet(video, modelLoaded)

    poseNet.on('pose', gotPoses)
}
function draw(){
    background("dodgerblue")
    document.getElementById("square_side").innerHTML = "Width and height of a text will be = "+ difference+"px"
    fill("#fc0377")
    stroke("#fcb503")
    text("YASH", noseX,noseY)
    textSize(difference)
  
    
}


function modelLoaded(){
    console.log("Model is initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("noseX = "+ noseX + "noseY = "+noseY)

    rightWrist = results[0].pose.rightWrist.x
    leftWrist = results[0].pose.leftWrist.x
    difference = floor(leftWrist - rightWrist)
    console.log("rightWrist = "+ rightWrist + "leftWrist = "+leftWrist+"difference = "+difference)
    }

}


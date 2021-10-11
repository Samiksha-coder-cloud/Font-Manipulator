function preload() {
}

noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    canvas = createCanvas(800,500);
    video.size(500,500);
    
    //initializing poseNet
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function draw() {
    background("#e96f6f");
    textSize(difference);
    fill("#00ff00");
    text("Samiksha", noseX, noseY);
}

function gotPoses(results) {
    if (results) {
        console.log("results");

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX= " + noseX);
        console.log("NoseY= " + noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        
        difference = floor(leftWrist - rightWrist);
        console.log(difference);

        document.getElementById("name_span").innerHTML = "Width and Height of the Name = " + difference + " px";
    }
}
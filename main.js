function preload() {
}

noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
wristX = 0;

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

function gotPoses(results) {
    if (results) {
        console.log("results");
    }
}
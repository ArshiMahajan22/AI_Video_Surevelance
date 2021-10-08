var video = "";
var DetectionStatus = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 190);
}

function draw(){
    image(video, 0, 0, 380, 380);
}

function Initialise(){
    CocoSsd = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('Status').innerHTML = "Status: Objects Detecting";
}

function modelLoaded(){
    console.log('Model is Loaded');
    DetectionStatus = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
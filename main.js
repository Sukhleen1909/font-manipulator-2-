function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(550,130);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('Posenet is intialised');
}
function draw() {
    background('#ffc0cb');
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}
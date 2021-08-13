var AC = "";

status = "";

function preload() {

AC = loadImage("AC.jpg");    

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);

ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "Status : Object Detecting";
    
}

function draw() {

image(AC, 0, 0, 640, 420);
    
}

function Back() {

window.location = "index.html"

}

function modelLoaded() {

console.log("Model Loaded");

status = true;

ObjectDetector.detect(AC, gotresults);

}

function gotresults(error, results) {

if(error) {

console.log(error);

}

console.log(results);

}
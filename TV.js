Tv = "";

function preload() {

Tv = loadImage("TV.jpeg");

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);

ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "Status : Object Detecting";
    
}

function draw() {

image(Tv, 0, 0, 640, 420);
    
}

function Back() {

    window.location = "index.html"
    
    }
    
function modelLoaded() {

    console.log("Model Loaded");
    
    status = true;
    
    ObjectDetector.detect(Tv, gotresults);
    
    }
    
    function gotresults(error, results) {
    
    if(error) {
    
    console.log(error);
    
    }
    
    console.log(results);
    
    }
Bedroom =""

function preload() {

Bedroom = loadImage("Bedroom.jpeg")

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);

ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "Status : Object Detecting";
    
}

function draw() {

image(Bedroom, 0, 0, 640, 420);

}

function Back() {

window.location = "index.html"

}

function modelLoaded() {

    console.log("Model Loaded");
    
    status = true;
    
    ObjectDetector.detect(Bedroom, gotresults);
    
    }
    
    function gotresults(error, results) {
    
    if(error) {
    
    console.log(error);
    
    }
    
    console.log(results);
    
    }
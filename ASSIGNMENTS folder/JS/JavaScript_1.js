function HelloWorldFunction(){
    var ArrayOfClassClickElements = document.getElementsByClassName("Click");
    ArrayOfClassClickElements[0].innerHTML="The text has changed!";
    
}
//CANVAS ELEMENT ASSIGNMENT


function canv01(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "sienna";
ctx.fill();
}
//GRADIENT COLOR CHALLENGE
function canv02(){
const canvas = document.getElementById("gradientCanvas");
const ctz = canvas.getContext("2d");

const gradient = ctz.createLinearGradient(20, 0, 220, 0);

gradient.addColorStop(0, "pink");
gradient.addColorStop(0.5, "purple");
gradient.addColorStop(1, "pink");

ctz.fillStyle = gradient;
ctz.fillRect(20, 20, 200, 100);
}

//I wrapped the above two exercises into functions to better isolate/identify them and separate them from one another. I also changed the name of the var in gradient color challenge from ctx to ctz so that it would not affect anything with execution. 
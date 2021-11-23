var weight = [35,38,42,45,43,34,36,41,48,32];
var zoom = 0;


function setup() {
  createCanvas(400,400);
for (var o=0; o<weight.length;o++){
zoom = zoom + weight [o]
}
 var abg = zoom/weight.length;
 console.log (abg);
}

function draw() 
{
  background(30);
}

 


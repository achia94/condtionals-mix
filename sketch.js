var x = 0;
var speed = 3;

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(x, 200, 100, 100);

	if (x > width || x < 0){
		speed = speed * -1;
	}

	if (mouseX > 50 && mouseY < 300){
		fill(255, 0, 200);
	} else {
		fill(0, 255, 0);
	}
		stroke(255);
		strokeWeight(1);
		rect(x, 100, 50, 50);

x = x + speed;







}

function Dot(x, y){
	this.x = x;
	this.y = y;

	this.draw = function(){	
		ctx.beginPath();
		ctx.arc(this.x, this.y, 0.5, 0, 2 * Math.PI);
		ctx.stroke();
	}
	
	this.getMiddlePointWith = function(point){
		return new Dot( (this.x + point.x) / 2,  (this.y + point.y) / 2);
	}
	
	this.getNextDotPosition = function(){
		var topDot = new Dot(100, 10);
		var leftDot = new Dot(10, 200);
		var rightDot = new Dot(200, 200);
		switch(getRandomNumber()){
			case 0:
				return this.getMiddlePointWith(topDot);
			case 1:
				return this.getMiddlePointWith(leftDot);
			case 2:
				return this.getMiddlePointWith(rightDot);
		}
	}

	this.switchToNext = function(){
		var nextDot = this.getNextDotPosition();
		this.x = nextDot.x;
		this.y = nextDot.y;
	}
}

function getRandomNumber(){
	return Math.floor(Math.random() * 3);
}

var currentDot = new Dot(100, 100);
var dotCount = 0;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

while (dotCount < 5000){
	currentDot.switchToNext();
	currentDot.draw();
	dotCount++;
}
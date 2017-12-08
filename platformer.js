
let myHero;
let score;
var bg;
var gravity = 0.5;
let platArray = [];


function preload(){
	bg = loadImage ("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2F4.jpg?1511805762360")
  sprite = loadImage ("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2Fit-is-wednesday-my-dudes-og.png?1511807868330")
}

 function setup(){
  createCanvas(windowWidth, windowHeight);
  score = 0;
  for (var i = 0; i < 2; i++){
	  let x = random(20,width-50);
	  let y = random(20, width-50);
	  let platWidth = 200;
	  platArray.push(new Platform(x,y,platWidth));
	  resetPlatforms();
  }
  
  myHero = new Hero();
 }
 
 function resetPlatforms(){
	platArray = [];
	 for (var i = 0; i < 15; i++){
		let x = random(20,width-50);
		let y = random(20, width-50);
		let platWidth = 200;
		platArray.push(new Platform(x,y,platWidth));
	}
 }

function fallen(){
	if(myHero.y > height){
		myHero.y = 0;
		score--;
		myHero.yspeed = 0;
		resetPlatforms();
	}
}
	
function draw(){
	background(bg);
	myHero.show();
	myHero.move();
	myHero.touchingPlat();
	drawAllPlatforms();
	fallen();
	textSize(22);
	text("Score: "+score, 10, 90);
	
	
}



function drawAllPlatforms () {
	for(var i = 0; i<platArray.length; i++){
		platArray[i].show();
	}
}

class Platform {
	constructor(x, y, w) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = 20;
	this.colorWheel = color(random(255), random(255), random(255));
	}
	show(){
		stroke(255);
		fill(this.colorWheel);
		rect(this.x, this.y, this.width, this.height);
	}
	contains(GivenX, GivenY) {
		return GivenX>this.x && GivenX < this.x + this.width && GivenY > this.y && GivenY < this.y + this.height;
	}
}

	
class Hero{
	constructor(){
		this.x = 20;
		this.y = 40;
		this.width = 10;
		this.height = 20;
		this.velocityx = 0;
		this.yspeed = 0;
		
	}
	
	touchingPlat(){
/* 		 if(this.y < platArray[i].y + platArray[i].height-10){
			return true
		}else{
			this.yspeed *= -1;
		}  */
	
		let result = false;
		for (let i=0; i < platArray.length; i++){
			if(platArray[i].contains(this.x, this.y+10)){
				return true;
				}				
			}
		return false;
	}		
		
		
	
	move(){
		if(this.touchingPlat() == false){
			//in air
			this.yspeed += gravity;
			this.y += this.yspeed;
		}
		if(keyIsDown(LEFT_ARROW)){
			this.x -= 3;
		}
		else if (keyIsDown(RIGHT_ARROW)){
			this.x += 3;
		}
		else if (keyIsDown(32)){
			this.yspeed = -3;
			this.y = this.y -= 6;
		}
	
		else
		{
			this.yspeed = 0;
			this.y = myHero.y - 10;
		}
			
			if(keyIsDown(LEFT_ARROW)){
				this.x -= 5;
			}
			if(keyIsDown(RIGHT_ARROW)){
				this.x += 5;
			}
		/* checkY(height){
			if(this.y > height) {
				this.y=0;
				this.yspeed = 0;
		}
	}
		checkX(width){
				if(this.x < width) {
				this.x += 5;
			}
			(else if (this.x > width){
				this.x -= 5;
			}
			
	 */
		}

	show()
	{
		image(sprite, this.x-15, this.y-20, 50, 50);
	}
}


 
	 
  
    
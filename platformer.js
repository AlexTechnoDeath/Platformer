let myHero;
let score;
var bg;
var co;
var gravity = 0.12;
let platArray = [];
let coinArray = [];


function preload(){
	bg = loadImage ("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2F4.jpg?1511805762360")
	sprite = loadImage ("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2Fit-is-wednesday-my-dudes-og.png?1511807868330")
	co = loadImage("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2Frobincoiin2.png?1513189590743")
}

 function setup(){
  createCanvas(windowWidth, windowHeight);
  score = 0;
  for (var i = 0; i < 2; i++){
	  let x = random(20,width-50);
	  let y = random(20, width-50);
	  let platWidth = 200;
	  let coWidth = 5;
	  platArray.push(new Platform(x,y,platWidth));
	  resetPlatforms();
	  resetCoins();
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
 function resetCoins(){
	 coinArray = [];
	 for (var i = 0; i < 15; i++){
		 let x = random(20, width-50);
		 let y = random(20, width-50);
		 let coinWidth = 5;
		 coinArray.push(new Coin(x,y,coinWidth));
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
	drawAllPlatforms();
	drawAllCoins();
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
				this.y = platArray[i].y-10;
				return true;
				}				
			}
		return false;
	}		
		
		
	
	move(){
		if(this.touchingPlat() == false){
			this.yspeed += gravity;
			this.y += this.yspeed;
		}
		else
		{
			console.log("On plat; reset yspeed");
			this.yspeed = 0;
		}
		if(keyIsDown(LEFT_ARROW)){
			this.x -= 3;
		}
		else if (keyIsDown(RIGHT_ARROW)){
			this.x += 3;
		}
		if (keyIsDown(32)){
			this.yspeed = -3;
			this.y = this.y - 6;
		}
	}


	show(){
		image(sprite, this.x-15, this.y-20, 50, 50);
	}
  
}

//coins
function drawAllCoins(){
	for(var i = 0; i<coinArray.length; i++){
		coinArray[i].show();
	}
}

function touchingCoin(){
	let result = false;
	for (let i=0; i<coins.length; i++){
		if(dist(this.x,this.y,coinArray[i].y<20 && coinArray[i].collected == false)){
			score++;
			coinArray[i].collected = true;
		}
	}
	return false;
		
}
class Coin{
	constructor(x, y, w) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.collected = false;
	}

	show(){
		if(this.collected == false){
			image(co, this.x,this.y, this.width, this.height);
		}
	}
	
	contains(givenX,givenY){
		if(givenX > this.x && givenX < this.x + this.width){
			if(givenY > this.y && givenY < this.y + this.height){
				return true
				score =+ 1;
			}
				
		}return false
	
	}

	
}



	
	




	

	
	

	



 
	 
  
    
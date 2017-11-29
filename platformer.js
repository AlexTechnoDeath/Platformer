//let platforms = [];
let bob;
let jim;
let score;
var bg;
var gravity = 0.12;

 function setup(){
  bg = loadImage ("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2F4.jpg?1511805762360")
  sprite = loadImage ("https://cdn.glitch.com/ef394497-75c8-46fe-b696-0abfea1fa654%2Fit-is-wednesday-my-dudes-og.png?1511807868330")
  createCanvas(windowWidth, windowHeight);
  score = 0;
  let x = 100;
  let y = 100;
  let width = 200;
  bob = new Platform(x,y,width);
  jim = new Hero();
 }
  //for (let i = 0; i < 1; i++)	  {
	//let x = 5;
	//let y = 10;
	//}

function fallen(){
	if(jim.y > height){
		jim.y = 0;
		score--;
	}
}
	
function draw(){
	background(bg);
	jim.show();
	jim.move();
	bob.show();
	bob.show();
	fallen();
	textSize(22);
	text("Score: "+score, 10, 90);
	
}
class Platform {
	constructor(x, y, width){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = 20;
	}
	contains(givenX, givenY){
		if (givenX > this.x && givenX < this.x + this.width && givenY > this.y && givenY < this.y + this.height){
			return true;
		}
		else{
			return false
		}
	}
	
	show(){
		rect(this.x, this.y, this.width, this.height);
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
	move(){
		if(bob.contains(this.x, this.y+10) == false){
			this.yspeed += gravity;
			this.y += this.yspeed;
		}else{
			this.yspeed = 0;
			this.y = bob.y - 10;
		}
		if(keyIsDown(LEFT_ARROW)){
			this.x -= 5;
		}
		if(keyIsDown(RIGHT_ARROW)){
			this.x += 5;
		}
		if(keyIsDown(32)){
			this.yspeed = -5; 
		}
		/*if(keyIsDown(DOWN_ARROW)){
			this.y += 5;
		}
		*/
	//&& bob.contains(this.x, this.y)
	}
	show(){
		
	
		image(sprite, this.x-15, this.y-20, 50, 50);
}
}
 
	 
  
    
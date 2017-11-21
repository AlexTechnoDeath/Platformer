//let platforms = [];
let bob;
let jim;
let score;
var bg;


 function setup(){
  bg = loadImage ("https://ak6.picdn.net/shutterstock/videos/14626936/thumb/4.jpg")
  createCanvas(852, 480);
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
		this.velocityy = 0;
		
	}
	move(){
		if(bob.contains(this.x, this.y) == false){
			this.y++;
		}
		if(keyIsDown(LEFT_ARROW)){
			this.x -= 5;
		}
		if(keyIsDown(RIGHT_ARROW)){
			this.x += 5;
		}
		/*if(keyIsDown(UP_ARROW)){
			this.y -= 5;
		}
		if(keyIsDown(DOWN_ARROW)){
			this.y += 5;
		}
		*/
	}
	show(){
		stroke("blue");
		strokeWeight(4);
		ellipse(this.x, this.y, this.width, this.height);
	}
}
 
	 
  
    
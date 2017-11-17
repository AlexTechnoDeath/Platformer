//let platforms = [];
let bob;
let jim;
let score;

class Platform {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = 20;
	}
	contains(givenX, givenY){
		if (givenX > this.x && this.x < this.x + this.width && givenY > this.y && this.y < this.y + this.width){
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
	
 function setup(){
  createCanvas(600, 400);
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
	if(jim.y < height){
		jim.y = 0;
		score--;
	}
}
	
function draw(){
	background("gray");
	jim.showHero();
	bob.showPlat();
	Text("Score: "+score, 20 90);
	
}

function drawScore(){
	fill("black");
	textAlign(LEFT);
	textSize(32);
	text("Score: " 60, 50);
}
	
class Hero{
	constructor(){
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 20;
		this.velocityx = 0;
		this.velocityy = 0;
		
	}
	move(){
		if(bob.contains(this.x, this.y) == false){
			this.y = y++;
		}
		if(KeyIsDown(LEFT_ARROW)){
			this.x -= 5;
		}
		if(KeyIsDown(RIGHT_ARROW)){
			this.x += 5;
		}
		if(KeyIsDown(UP_ARROW)){
			this.y -= 5;
		}
		if(KeyIsDown(DOWN_ARROW)){
			this.y += 5;
		}
	}
	


	show(){
		stroke("blue");
		strokeWeight(4);
		ellipse(this.x, this.y, this.width, this.height);
	}
}
 
	 
  
    
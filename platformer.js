//let platforms = [];
let bob;
let jim;

class Platform {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = 20;
	}
	
	
	show(){
		rect(this.x, this.y, this.width, this.height);
	}
	}
	
 function setup(){
  createCanvas(600, 400);
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
	
function draw(){
	background("gray");
	jim.showHero();
	bob.showPlat();
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
 
	 
  
    
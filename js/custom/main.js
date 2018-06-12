$(document).ready(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop()){
			$('nav').addClass('scroll');
		}
		else{
			$('nav').removeClass('scroll');
		}
	});
	
});


/******************************************** JAVASCRIPT ********************************************/
window.onload = function(){

	/* Opened Menu */

	(function(){
		var opened = document.querySelector('nav'),
		nav = document.querySelector('nav');

		opened.onclick = function() {
			nav.classList.toggle('nav-opened');
		}
	}());

	/* End Opened Menu */

	/* Slider animate*/

	const imgs = document.querySelectorAll(".slider img");
	let currentIndex = 0;
let time = 5000; // default time for auto slideshow

const defClass = (startPos, index) => {
	for (let i = startPos; i < imgs.length; i++) {
		imgs[i].style.display = "none";
	}
	imgs[index].style.display = "block";
};

defClass(1, 0);

const startAutoSlide = () => {
	setInterval(() => {
		currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
		defClass(0, currentIndex);
	}, time);
};

startAutoSlide(); // Start the slideshow

/*End Slider animate*/

/*Canvas animate */
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
var colorArray =[
'#FFFFFF',
'#CACBD5',
'#666F89',
'#3D4252',
'#D55E2D',
];

function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color= colorArray[Math.floor(Math.random() * colorArray.length)];
	this.draw = function (){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2 ,false);
		c.stroke();
		c.fillStyle=this.color;
		c.fill();
	}
	this.update = function (){
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx=-this.dx;
		}
		if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy=-this.dy;
		}
		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
	}
}
var circleArray = [];
function init(){
	circleArray = [];
	for (var i = 0; i < 100; i++) {
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5);
		var dy = (Math.random() - 0.5);
		var radius = Math.random()*3+1;
		circleArray.push(new Circle(x,y,dx,dy,radius));

	}
}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight); 	
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}
animate();
init();
} 
/*End Canvas animate*/

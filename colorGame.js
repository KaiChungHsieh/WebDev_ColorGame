var colors = generateRandomColors(6);

// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// ]
var squares = document.querySelectorAll(".square");
//var pickedColor = colors[3];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	// click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			//alert("GOOD!");
			messageDisplay.textContent = "Correct!!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			//alert("WRONG!");
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var rVal = Math.floor(Math.random() * 256);
	var gVal = Math.floor(Math.random() * 256);
	var bVal = Math.floor(Math.random() * 256);
	// rgb(rVal, gVal, bVal)
	return "rgb(" + rVal + ", " + gVal + ", " + bVal + ")";
}


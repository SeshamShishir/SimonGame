var play=0;
const colors=["green", "red", "yellow", "blue"];
const green= document.querySelector(".green");
const red= document.querySelector(".red");
const yellow= document.querySelector(".yellow");
const blue= document.querySelector(".blue");
const heading = document.querySelector(".heading");
var lvl= 1;
var array=[];
var enteredArray=[];
var allowInput=0;


if(play==0){
	document.addEventListener("keydown", function(){
		if(play==0){
			setTimeout(function(){
				nextSequence();
			}, 400);
		 	play=1;
		}
	});
}

for(var len=0; len<document.getElementsByClassName("btn").length; len++){
	document.querySelector(".btn"+len).addEventListener("click", function(){
		if(allowInput==1){
			var clickedColor= this.id;
			enteredArray.push(clickedColor);
			show(clickedColor);
			check(enteredArray.length-1);
		}
	});
}

function check(current){
	if(enteredArray[current]==colors[array[current]]){
		if(enteredArray.length==array.length){
			enteredArray.splice(0, enteredArray.length);
			setTimeout(function(){
				nextSequence();
			}, 400);
		}
	}else{
		array.splice(0, array.length);
		enteredArray.splice(0, enteredArray.length);
		heading.innerHTML="Game over, Press any key to restart";
		lvl=0;
		play=0;
		allowInput=0;
	}
}

function show(name){
	document.querySelector("."+name).style.opacity="100%";
	document.querySelector("."+name).classList.add("blink");
	setTimeout(function(){
		document.querySelector("."+name).classList.remove("blink");
		document.querySelector("."+name).style.opacity="70%";
	}, 100);
}
function nextSequence(){
	allowInput=0;
	var randomNumber= Math.floor(Math.random()*4);
	heading.innerHTML="Level: "+lvl;
	array.push(randomNumber);
	lvl++;
	sequence(array);
}

function sequence(arr){
	for(var i=0;i<arr.length;i++){
		animate(arr, i);
	}
	setTimeout(function(){
		allowInput=1;
	}, arr.length*400);
}

function animate(a, n){
	var className= colors[a[n]]
	setTimeout(function(){
		document.querySelector("."+className).style.opacity="100%";
	}, 400*n);
	setTimeout(function(){
		document.querySelector("."+className).style.opacity="70%";
	}, (400*(n)+350));
}
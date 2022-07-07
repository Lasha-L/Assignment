document.getElementById("next").onclick = function(){
    location.href = "final.html"
}

document.getElementById("previous").onclick = function(){
    location.href = "register1.html"
}

/* This will be changed in the future as to fix drop down */

function show(anything){
	document.querySelector('.textBox').value = anything;
}
/*
let dropdown = document.querySelector('.select');
dropdown.onclick = function(){
	dropdown.classList.toggle('active');
}*/

function makeActive() {
   var element = document.querySelector('.select');
   element.classList.toggle('active');
}

/* **************************** */
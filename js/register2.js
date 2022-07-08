document.getElementById("next").onclick = function(){
    location.href = "final.html"
}

document.getElementById("previous").onclick = function(){
    location.href = "register1.html"
}

/* This will be changed in the future as to fix drop down */

function show_1(anything){
	document.querySelector('.field-1').value = anything;
}

function show_2(anything){
	document.querySelector('.field-2').value = anything;
}

/*
let dropdown = document.querySelector('.select');
dropdown.onclick = function(){
	dropdown.classList.toggle('active');
}*/

function makeActive_1() {
   var element = document.querySelector('.dropdown-1');
   element.classList.toggle('active');
}

function makeActive_2() {
    var element = document.querySelector('.dropdown-2');
    element.classList.toggle('active');
 }

/* **************************** */
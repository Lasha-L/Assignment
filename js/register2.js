document.getElementById("next").onclick = function(){
    location.href = "final.html"
}

document.getElementById("previous").onclick = function(){
    location.href = "register1.html"
}


function show_1(anything){
	document.querySelector('.field-1').value = anything;
}

function show_2(anything){
	document.querySelector('.field-2').value = anything;
}


function makeActive_1() {
   var element = document.querySelector('.dropdown-1');
   element.classList.toggle('active');
}

function makeActive_2() {
    var element = document.querySelector('.dropdown-2');
    element.classList.toggle('active');
 }


function active(){
    document.getElementById("square-2").classList.add('current')
}
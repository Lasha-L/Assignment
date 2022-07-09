const chooseLevel = document.querySelectorAll('.level-choice > li');
const chooseChar = document.querySelectorAll('.text > li');
//const played_before = document.querySelectorAll('.yes-no > li');


document.getElementById("previous").onclick = function(){
    location.href = "register1.html"
}

let isSelected_1 = false;
let isSelected_2 = false;


function show_1(anything){
    document.querySelector('.field-1').value = anything;
    document.getElementById("level").setAttribute('value',anything);
    isSelected_1 = true;
    validInput();
}

function show_2(anything){
	document.querySelector('.field-2').value = anything;
    document.getElementById("character").setAttribute('value',anything);
    isSelected_2 = true;
    validInput();
}

function makeActive_1() {
   var element = document.querySelector('.dropdown-1');
   element.classList.toggle('active');
}

function makeActive_2() {
    var element = document.querySelector('.dropdown-2');
    element.classList.toggle('active');
 }
 
function validInput(){
    if(isSelected_1&&isSelected_2){
        document.getElementById("submit").innerHTML = "Done"
        document.getElementById("next-icon").style.display = 'none'
    }
}

if(isSelected_1&&isSelected_2){
    document.getElementById("next").onclick = function(){
        location.href = "final.html"
    }
}

document.getElementById('screen').onclick = function(e) {
    if(e.target != document.querySelector('.option-level')&&e.target != document.getElementById("level")) {
        var element = document.querySelector('.dropdown-1');
        element.classList.remove('active');
    }
    if(e.target != document.querySelector('.option-character')&&e.target != document.getElementById("character")) {
        var element = document.querySelector('.dropdown-2');
        element.classList.remove('active');
    }
}



/*
function validLevel(){
    var level;
    for (let option in chooseLevel) {
        if (option.textContent == chooseLevel.textContent) {
            isSelected_1 = true;
            level = option.textContent;
            document.getElementById("level").value = level;
            break;
        }
    }
}
const level_choice1=document.getElementById("l-1");
const level_choice2=document.getElementById("l-2");
const level_choice3=document.getElementById("l-3");

let method1 = level_choice1.getAttribute('value');
let method2 = level_choice2.getAttribute('value');
let method3 = level_choice3.getAttribute('value');

document.getElementById("level").setAttribute('value',method1);

console.log(document.getElementById("level").value);

function validCharacter(){
    var character;
    let isSelected_2 = false;
    for (let option in chooseLevel) {
        if (option.textContent == chooseLevel.textContent) {
            isSelected_2 = true;
            character = option.textContent;
            JSON.stringify(character);
            document.getElementById("character").value = character;
            break;
        }
    }
}


*/
/*Code that makes submit button become done

 */
/* this works if you click your mouse off  but needs fixing
formContainer.classList.Add(active);
localstorage.setItem(formcontainer, active)
formContainer.classlist.add(localStorage.getItem(formContainer)

function makeInActive_1() {
    var element = document.querySelector('.option-level');
    element.classList.remove('active');
 }
 
 function makeInActive_2() {
     var element = document.querySelector('.option-character');
     element.classList.remove('active');
  }

 
*/
function active(){
    document.getElementById("square-2").classList.add('current')
}
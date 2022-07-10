/*window.onload = function() {
     var reseted = localStorage.getItem("reseted");

    if(reseted === "reseted"){
        localStorage.document.getElementById("reset").clear();
        document.getElementById("reset").setAttribute('value',"reset");
        console.log(document.getElementById("reset").value);
        document.getElementById("played").checked = false;
        document.getElementById("not-played").checked = false;
    }
   
    if (level_var !== null) document.getElementById("level").value = level_var; 
    if (character_var !== null) document.getElementById("character").value = character_var;
    if(played_var == "yes"){
      document.getElementById("played").checked = true;
    }
    else{
        document.getElementById("not-played").checked = true;
    }
    if(finish_button){
        document.getElementById("submit").innerHTML = "Done";
        document.getElementById("next-icon").style.display = 'none';
        isSelected_1 = true;
        isSelected_2 = true;
    }
}
*/




/*
const level_choice1=document.getElementById("l-1");
const level_choice2=document.getElementById("l-2");
const level_choice3=document.getElementById("l-3");

let level_val1 = level_choice1.getAttribute('value');
let level_val2 = level_choice2.getAttribute('value');
let level_val3 = level_choice3.getAttribute('value');

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const level = document.getElementById("level");
const character = document.getElementById("character");

const char_choice1=document.getElementById("c-1");
const char_choice2=document.getElementById("c-2");
const char_choice3=document.getElementById("c-3");
const char_choice4=document.getElementById("c-4");

let char_val1 = char_choice1.getAttribute('value');
let char_val2 = char_choice2.getAttribute('value');
let char_val3 = char_choice3.getAttribute('value');
let char_val4 = char_choice4.getAttribute('value');



function validLevel(){
    if(level.value == level_val1 || level.value == level_val2 || level.value == level_val3){
        return true;
    }
    return false;
}

function validCharacter(){
    if(character.value == char_val1 || level.value == char_val2 || level.value == char_val3 ||level.value == char_val4){
        return true;
    }
    return false;
}

*/

//document.getElementById("character").setAttribute('value',char_val1);

//console.log(document.getElementById("character").value);

/*


const played = document.getElementById("played")
var someVarName = "value";
localStorage.setItem("someVarKey", someVarName);
var someVarName = localStorage.getItem("someVarKey");
*/

/*
var tellme = document.querySelector('input[name="rate"]:checked').value;

window.onbeforeunload = function() {
    localStorage.setItem("name", $('#name').val());
    localStorage.setItem("email", $('#email').val());
    localStorage.setItem("phone", $('#phone').val());
    localStorage.setItem("date", $('#date').val());
    localStorage.setItem("level", $('#level').val());
    localStorage.setItem("character", $('#character').val());
    localStorage.setItem("played", $('#played').val());
}

window.onload = function() {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var date = localStorage.getItem("date");
    var level = localStorage.getItem("level");
    var character = localStorage.getItem("character");
    var played = localStorage.getItem("played");

    if (name !== null) $('#name').val(name); 
    if (email !== null) $('#email').val(email);
    if (phone !== null) $('#phone').val(phone); 
    if (date !== null) $('#date').val(date);
    if (level !== null) $('#level').val(level); 
    if (character !== null) $('#character').val(character);
    if (played !== null) $('#played').val(played);
}*/
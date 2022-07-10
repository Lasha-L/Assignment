document.getElementById("previous").onclick = function(){
    location.href = "register1.html"
}

//https://chess-tournament-api.devtest.ge/api/register
const api_url = 'https://chess-tournament-api.devtest.ge/api/grandmasters';
async function getapi(url){
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    console.log(data[0][0]);
    console.log(data[0][1]);
    console.log(data[0][2]);
    console.log(data[1][0]);
    console.log(data[1][1]);
    console.log(data[1][2]);
    console.log(data[2][0]);
    console.log(data[2][1]);
    console.log(data[2][2]);
}
getapi(api_url);

function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.office}</td>
        <td>${r.position}</td> 
        <td>${r.salary}</td>          
        </tr>`;
    }
}
let isSelected_1 = false;
let isSelected_2 = false;

let flag_for_submit = false;

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
   popupError.style.display = 'none';
}

function makeActive_2() {
    var element = document.querySelector('.dropdown-2');
    element.classList.toggle('active');
    popupError.style.display = 'none';
 }
 
function validInput(){
    if(isSelected_1&&isSelected_2){
        document.getElementById("submit").innerHTML = "Done";
        document.getElementById("next-icon").style.display = 'none';
        flag_for_submit = true;
    }
}

const popupError = document.getElementById("error");
const closeError = document.getElementById("close-error");
closeError.onclick = function(){
    popupError.style.display = 'none';
}

function done(){
    if(isSelected_1&&isSelected_2){
        location.href = "final.html";
        console.log(document.getElementById("level"));
        console.log(document.getElementById("character"));
        localStorage.clear();
        document.getElementById("played").checked = true;
    }else{
        popupError.style.display = 'block';
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

function active(){
    document.getElementById("square-2").classList.add('current')
}


function check_1(){
    document.getElementById("played").checked = true;
}

function check_2(){
    document.getElementById("not-played").checked = true;
}

function check_valid(){
    var options1=Array.from(document.querySelectorAll('.level-choice')).map(v => v.value);
    var options2=Array.from(document.querySelectorAll('.option-character div')).map(v => v.value);
    for (let options in options1){
        console.log(options1[options]);
        if(options.value == document.getElementById("level").value){
            isSelected_1 = true;
            console.log("True");
            break;
        }
    }
    for (let options in options2){
        if(options.value == document.getElementById("level").value){
            isSelected_2 = true;
            break;
        }
    }
}

window.onbeforeunload = function() {
    if(isSelected_1){
        localStorage.setItem("level", document.getElementById("level").value);
    }
    if(isSelected_2){
        localStorage.setItem("character", document.getElementById("character").value);
    }
    if(document.getElementById("played").checked == true){
        localStorage.setItem("played", document.getElementById("played").value);
    }
    else{
        localStorage.setItem("played",document.getElementById("not-played").value);
    }
    localStorage.setItem("finish_button",flag_for_submit);

}

window.onload = function() {
    check_valid();
    var level_var = localStorage.getItem("level");
    var character_var = localStorage.getItem("character");
    var played_var = localStorage.getItem("played");
    var finish_button = localStorage.getItem("finish_button");
    
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
    }
}



/*

const level_choice1=document.getElementById("l-1");
const level_choice2=document.getElementById("l-2");
const level_choice3=document.getElementById("l-3");

let method1 = level_choice1.getAttribute('value');
let method2 = level_choice2.getAttribute('value');
let method3 = level_choice3.getAttribute('value');

document.getElementById("level").setAttribute('value',method1);

console.log(document.getElementById("level").value);

if(isSelected_1&&isSelected_2){
        document.getElementById("next").onclick = function(){
            
        }
    }



this works if you click your mouse off  but needs fixing
formContainer.classList.Add(active);
localstorage.setItem(formcontainer, active)
formContainer.classlist.add(localStorage.getItem(formContainer) 
*/

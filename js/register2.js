document.getElementById("previous").onclick = function(){
    location.href = "register1.html"
}
// getting data
const api_url = 'https://chess-tournament-api.devtest.ge/api/grandmasters';
async function getapi(url){
    const response = await fetch(url);

    var data = await response.json();
    return data;
    console.log(data);
}
getapi(api_url);

async function renderUsers() {
    let users = await getapi(api_url);
    let html = '<p>(Total 4)</p>';
    users.forEach(user => {
        let htmlSegment = `<div id="${user.id}" value="${user.name}" class="grandmaster" onclick="show_2('${user.name}')">
                            <span class="text">${user.name}</span>
                            <img src="https://chess-tournament-api.devtest.ge${user.image}"/>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.option-character');
    container.innerHTML = html;
}

renderUsers();


let isSelected_1 = false;
let isSelected_2 = false;

let flag_for_submit = false;

var dropdown_icon1 = document.getElementById("drop-icon-1");
var dropdown_icon2 = document.getElementById("drop-icon-2");

function show_1(anything){
    document.querySelector('.field-1').value = anything;
    document.getElementById("level").setAttribute('value',anything);
    localStorage.setItem("level", document.getElementById("level").value);
    isSelected_1 = true;
    dropdown_icon1.src = "./icons/Vector_list_down.png";
    validInput();
}

function show_2(anything){
	document.querySelector('.field-2').value = anything;
    document.getElementById("character").setAttribute('value',anything);
    localStorage.setItem("character", document.getElementById("character").value);
    isSelected_2 = true;
    dropdown_icon2.src = "./icons/Vector_list_down.png";
    validInput();
}
document.getElementById("level").onclick = function(){
    dropdown_icon1.src = "./icons/Vector_list_up.png";
}

document.getElementById("character").onclick = function(){
    dropdown_icon2.src = "./icons/Vector_list_up.png";
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
        //location.href = "final.html";
        var id;
        if(localStorage.getItem("character") == document.getElementById("1").getAttribute('value')){
            id = 1;
        }else if(localStorage.getItem("character") == document.getElementById("2").getAttribute('value')){
            id = 2;
        }else if(localStorage.getItem("character") == document.getElementById("3").getAttribute('value')){
            id = 3;
        }else{
            id = 4;
        }
        var exp;
        if(localStorage.getItem("level")=="intermediate"){
            exp = "normal";
        }else if(localStorage.getItem("level")=="begginer"){
            exp = "begginer";
        }else{
            exp = "professional"
        }

        fetch('https://chess-tournament-api.devtest.ge/api/register',{
            method: 'POST',
            headers:{
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": localStorage.getItem("name"),
                "email": localStorage.getItem("email"),
                "phone": localStorage.getItem("phone"),
                "date_of_birth": localStorage.getItem("date"),
                "experience_level": exp,
                "already_participated": localStorage.getItem("played") === "true",
                "character_id": id
            })
        })
        //.then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        document.getElementById("played").checked = true;
    }else{
        popupError.style.display = 'block';
        
    }
}

document.getElementById('screen').onclick = function(e) {
    if(e.target != document.querySelector('.option-level')&&e.target != document.getElementById("level")) {
        var element = document.querySelector('.dropdown-1');
        element.classList.remove('active');
        dropdown_icon1.src = "./icons/Vector_list_down.png";
    }
    if(e.target != document.querySelector('.option-character')&&e.target != document.getElementById("character")) {
        var element = document.querySelector('.dropdown-2');
        element.classList.remove('active');
        dropdown_icon2.src = "./icons/Vector_list_down.png";
    }
}

function active(){
    document.getElementById("square-2").classList.add('current');
}


function check_1(){
    document.getElementById("played").checked = true;
    localStorage.setItem("played", document.getElementById("played").checked);
}

function check_2(){
    document.getElementById("not-played").checked = true;
    localStorage.setItem("played",document.getElementById("played").checked);
}

window.onbeforeunload = function() {
    localStorage.setItem("finish_button",flag_for_submit);
    localStorage.setItem("selected_1",isSelected_1);
    localStorage.setItem("selected_2",isSelected_2);
}

window.onload = function() {
    var level_var = localStorage.getItem("level");
    var character_var = localStorage.getItem("character");
    var played_var = localStorage.getItem("played");
    var finish_button = localStorage.getItem("finish_button");
    var selected_1 = localStorage.getItem("selected_1");
    var selected_2 = localStorage.getItem("selected_2");
    if (level_var !== null) document.getElementById("level").value = level_var; 
    if (character_var !== null) document.getElementById("character").value = character_var;
    if(played_var === "true"){
        document.getElementById("played").checked = true;
    }else{
        document.getElementById("not-played").checked = true;
    }
    
    if(finish_button){
        document.getElementById("submit").innerHTML = "Done";
        document.getElementById("next-icon").style.display = 'none';
    }
    if(selected_1 === "true"){
        isSelected_1 = true;
    }else{
        isSelected_1 = false;
    }
    if(selected_2 === "true"){
        isSelected_2 = true;
    }else{
        isSelected_2 = false;
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

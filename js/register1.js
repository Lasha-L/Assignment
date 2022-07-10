const popupError = document.getElementById("error")
const closeError = document.getElementById("close-error")
const correctInput_1 = document.getElementById("correct-1")
const correctInput_2 = document.getElementById("correct-2")
const correctInput_3 = document.getElementById("correct-3")
const correctInput_4 = document.getElementById("correct-4")

closeError.onclick = function(){
    popupError.style.display = 'none'
}

function displayError(){
    popupError.style.display = 'block'
}
let field_1 = false;
let field_2 = false;
let field_3 = false;
let field_4 = false;

function validateName(){
    var name_val = document.getElementById("name").value

    if(name_val.length < 2 || !name_val.match(/^([A-Za-z])([A-Za-z ])+$/)){
        document.getElementById("warning-header").innerHTML = "Invalid name"
        document.getElementById("warning-text").innerHTML = "Please enter valid name"
        displayError();
        correctInput_1.style.display = 'none'
        document.getElementById("name").classList.add('invalid');
        document.getElementById("square-1").classList.remove('finished')
        field_1 = false;
        return false
    }
    document.getElementById("name").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_1.style.display = 'block'
    field_1 = true;
    progressCheck();
    return true
}

function validateEmail(){
    var email_val = document.getElementById("email").value

    if(email_val.length == 0 || !email_val.match(/^[A-Za-z][a-z0-9_.]*@redberry.ge$/)){
        document.getElementById("warning-header").innerHTML = "Invalid email"
        document.getElementById("warning-text").innerHTML = "Please enter valid email address"
        displayError()
        correctInput_2.style.display = 'none'
        document.getElementById("email").classList.add('invalid');
        document.getElementById("square-1").classList.remove('finished')
        field_2 = false;
        return false
    }
    document.getElementById("email").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_2.style.display = 'block'
    field_2 = true;
    progressCheck();
    return true
}

function validatePhone(){
    var Phone_val = document.getElementById("phone").value

    if(Phone_val.length < 9 || !Phone_val.match(/^5\d{8}$/)){
        document.getElementById("warning-header").innerHTML = "Invalid phone number"
        document.getElementById("warning-text").innerHTML = "Please enter valid phone number"
        displayError()
        correctInput_3.style.display = 'none'
        document.getElementById("phone").classList.add('invalid');
        document.getElementById("square-1").classList.remove('finished')
        field_3 = false;
        return false
    }
    document.getElementById("phone").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_3.style.display = 'block'
    field_3 = true;
    progressCheck();
    return true
}

function validateDate(){
    var date_val = document.getElementById("date").value

    if(date_val==0 || !date_val.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:19[2-9]\d|200[0-6]))$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:19)(?:[2468][048]|[3579][26])|(?:(?:200)[04]))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:19[2-9]\d|200[0-6]))$/)){
        document.getElementById("warning-header").innerHTML = "Invalid date of birth"
        document.getElementById("warning-text").innerHTML = "Please enter valid date of birth"
        displayError()
        correctInput_4.style.display = 'none'
        document.getElementById("date").classList.add('invalid');
        document.getElementById("square-1").classList.remove('finished')
        field_4 = false;
        return false
    }
    document.getElementById("date").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_4.style.display = 'block'
    field_4 = true;
    progressCheck();
    return true
}

function validateForm(){
    if(!validateName()||!validateEmail()||!validatePhone()||!validateDate()){
        if(!field_1){
            document.getElementById("name").classList.add('invalid');
        }
        if(!field_2){
            document.getElementById("email").classList.add('invalid');
        }
        if(!field_3){
            document.getElementById("phone").classList.add('invalid');
        }
        if(!field_4){
            document.getElementById("date").classList.add('invalid');
        }
        return false;
    }
    return true;
}

document.getElementById("next").onclick = function(){
    if(validateForm()){
        location.href = "register2.html"
    }
    else{
        document.getElementById("warning-header").innerHTML = "Invalid input"
        document.getElementById("warning-text").innerHTML = "Please enter valid data"
        displayError();
    }
}

function active(){
    document.getElementById("square-1").classList.add('current')
}

document.getElementById("previous").onclick = function(){
    location.href = "index.html"
}

function progressCheck(){
    if(field_1 && field_2 && field_3 && field_4){
        document.getElementById("square-1").classList.add('finished')
    }
}

window.onbeforeunload = function() {
    if(field_1){
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("correct-1", document.getElementById("correct-1"));
    }
    if(field_2){
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("correct-2", document.getElementById("correct-2"));
    }
    if(field_3){
        localStorage.setItem("phone", document.getElementById("phone").value);
        localStorage.setItem("correct-3", document.getElementById("correct-3"));
    }
    if(field_4){
        localStorage.setItem("date", document.getElementById("date").value);
        localStorage.setItem("correct-4", document.getElementById("correct-4"));
    }
    if(field_1 && field_2 && field_3 && field_4){
        localStorage.setItem("icon", document.getElementById("square-1"));
    }
}

window.onload = function() {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var date = localStorage.getItem("date");

    var correct_1 = localStorage.getItem("correct-1");
    var correct_2 = localStorage.getItem("correct-2");
    var correct_3 = localStorage.getItem("correct-3");
    var correct_4 = localStorage.getItem("correct-4");

    var finished_all = localStorage.getItem("icon");

    if (name !== null) document.getElementById("name").value = name; 
    if (email !== null) document.getElementById("email").value = email;
    if (phone !== null) document.getElementById("phone").value = phone; 
    if (date !== null) document.getElementById("date").value = date;

    if (correct_1 !== null) document.getElementById("correct-1").style.display = 'block';
    if (correct_2 !== null) document.getElementById("correct-2").style.display = 'block';
    if (correct_3 !== null) document.getElementById("correct-3").style.display = 'block';
    if (correct_4 !== null) document.getElementById("correct-4").style.display = 'block';

    if(finished_all != null){
        document.getElementById("square-1").classList.add('finished');
        document.getElementById("square-1").classList.add('current')
    } 
}


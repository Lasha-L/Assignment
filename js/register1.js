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

function validateName(){
    var name_val = document.getElementById("name").value

    if(name_val.length < 2 || !name_val.match(/^([A-Za-z])([A-Za-z ])+$/)){
        document.getElementById("warning-header").innerHTML = "Invalid name"
        document.getElementById("warning-text").innerHTML = "Please enter valid name"
        displayError()
        correctInput_1.style.display = 'none'
        document.getElementById("name").classList.add('invalid');
        document.getElementById("square-1").classList.remove('finished')
        return false
    }
    document.getElementById("name").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_1.style.display = 'block'
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
        return false
    }
    document.getElementById("email").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_2.style.display = 'block'
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
        return false
    }
    document.getElementById("phone").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_3.style.display = 'block'
    return true
}

/* date input needs fixing */
function validateDate(){
    var date_val = document.getElementById("date").value

    if(!date_val.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:19[2-9]\d|200[0-6]))$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:19)(?:[2468][048]|[3579][26])|(?:(?:200)[04]))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:19[2-9]\d|200[0-6]))$/)){
        document.getElementById("warning-header").innerHTML = "Invalid date of birth"
        document.getElementById("warning-text").innerHTML = "Please enter valid date of birth"
        displayError()
        correctInput_4.style.display = 'none'
        document.getElementById("date").classList.add('invalid');
        document.getElementById("square-1").classList.remove('finished')
        return false
    }
    document.getElementById("date").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_4.style.display = 'block'
    return true
}

function validateForm(){
    if(!validateName()||!validateEmail()||!validatePhone()||!validateDate()){
        if(!validateName()){
            document.getElementById("name").classList.add('invalid');
        }
        if(!validateEmail()){
            document.getElementById("email").classList.add('invalid');
        }
        if(!validatePhone()){
            document.getElementById("phone").classList.add('invalid');
        }
        if(!validateDate()){
            document.getElementById("date").classList.add('invalid');
        }
        return false
    }
    return true
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
    if(validateForm()){
        document.getElementById("square-1").classList.add('finished')
    }
}
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

    if(name_val.length < 2 || !name_val.match(/^[A-Za-z]+$/)){
        document.getElementById("warning-header").innerHTML = "Invalid name"
        document.getElementById("warning-text").innerHTML = "Please enter valid name"
        displayError()
        correctInput_1.style.display = 'none'
        document.getElementById("name").classList.add('invalid');
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
        return false
    }
    document.getElementById("email").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_2.style.display = 'block'
    return true
}


function validatePhone(){
    var Phone_val = document.getElementById("phone").value

    if(Phone_val.length < 9){
        document.getElementById("warning-header").innerHTML = "Invalid phone number"
        document.getElementById("warning-text").innerHTML = "Please enter valid phone number"
        displayError()
        correctInput_3.style.display = 'none'
        document.getElementById("phone").classList.add('invalid');
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

    if(document.getElementById("date").valid){
        document.getElementById("warning-header").innerHTML = "Invalid date of birth"
        document.getElementById("warning-text").innerHTML = "Please enter valid date of birth"
        displayError()
        correctInput_4.style.display = 'none'
        document.getElementById("date").classList.add('invalid');
        return false
    }
    document.getElementById("date").classList.remove('invalid');
    popupError.style.display = 'none'
    correctInput_4.style.display = 'block'
    return true
}

function validateForm(){
    if(!validateName()||!validateEmail()||!validatePhone()||!validateDate()){
        document.getElementById("warning-header").innerHTML = "Invalid input"
        document.getElementById("warning-text").innerHTML = "Please enter valid data"
        return false
    }
    return true
}




document.getElementById("previous").onclick = function(){
    location.href = "index.html"
}




/*
document.getElementById("next").onclick = function(){
    e.preventDefault();
    if(inputCheck()){
        location.href = "register2.html"
    }
    else{
        showError();
    }
}

const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const date = document.getElementById("date")

document.getElementById("next").onclick = function(){
    location.href = "register2.html"
}


*/
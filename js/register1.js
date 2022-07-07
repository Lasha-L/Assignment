const username = document.getElementById("name")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone")
const birthdate = document.getElementById("date")
const form = document.getElementById("sign-up-form")

form.addEventListener('submit', (e)=>{
    let popupError = document.querySelector('.error');

    if(username.value === '' || username.value === null){
        popupError.classList.toggle('active');
    }

    if(messages.length>2){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})







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



function inputCheck(){

}


document.getElementById("next").onclick = function(){
    location.href = "register2.html"
}

*/









document.getElementById("previous").onclick = function(){
    location.href = "index.html"
}

document.getElementById("warning-header").innerHTML = "Invalid name"
document.getElementById("warning-text").innerHTML = "Please enter valid name"

document.getElementById("warning-header").innerHTML = "Invalid email"
document.getElementById("warning-text").innerHTML = "Please enter valid email address"

document.getElementById("warning-header").innerHTML = "Invalid phone number"
document.getElementById("warning-text").innerHTML = "Please enter valid phone number"

document.getElementById("warning-header").innerHTML = "Invalid date of birth"
document.getElementById("warning-text").innerHTML = "Please enter valid date of birth"

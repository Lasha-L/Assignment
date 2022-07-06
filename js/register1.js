document.getElementById("next").onclick = function(){
    location.href = "register2.html"
}

document.getElementById("previous").onclick = function(){
    location.href = "index.html"
}

function validateForm() {
    var x = document.forms["form-group"].value;
    if (x == "") {
      let header = document.getElementById("warning-header");
      header.innerText = "";
      return false;
    }
  } 

$("#btn").click(function () {

    if ($("#frm")[0].checkValidity())
        alert('sucess');
    else
        //Validate Form
        $("#frm")[0].reportValidity()

});

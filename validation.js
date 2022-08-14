//Validtion Code For Inputs

var flexRadioDefault = document.forms["form"]["flexRadioDefault"];
var check = document.forms["form"]["check"];

var radio_error = document.getElementById("radio_error");
var check_error = document.getElementById("check_error");

flexRadioDefault.addEventListener("textInput", radio_Verify);
check.addEventListener("textInput", check_Verify);

function validated() {
  if (check.checked == false) {
    check_error.style.display = "inline";
    check.focus();
    return false;
  }

  if (flexRadioDefault.checked == false) {
    radio_error.style.display = "inline";
    radio.focus();
    return false;
  }
}

function check_Verify() {
  if (check.checked == true) {
    check_error.style.display = "none";
    return true;
  }
}

function radio_Verify() {
  if (flexRadioDefault.checked == true) {
    radio_error.style.display = "none";
    return true;
  }
}

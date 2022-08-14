function myFunction2() {
  var radio = document.getElementById("flexRadioDefault3");

  var radiobtn = document.getElementById("radiobtn");

  var radiobtntext = document.getElementById("radiobtntext");

  var radiobtn2 = document.getElementById("radiobtn2");

  var radiobtntext2 = document.getElementById("radiobtntext2");

  var radiobtn3 = document.getElementById("radiobtn3");

  var radiobtntext3 = document.getElementById("radiobtntext3");

  if (radio.checked == true) {
    radiobtn.style.visibility = "visible";
  } else {
    radiobtn.style.visibility = "hidden";
  }

  if (radio.checked == true) {
    radiobtntext.style.visibility = "visible";
  } else {
    radiobtntext.style.visibility = "hidden";
  }

  if (radio.checked == true) {
    radiobtn2.style.visibility = "visible";
  } else {
    radiobtn2.style.visibility = "hidden";
  }

  if (radio.checked == true) {
    radiobtntext2.style.visibility = "visible";
  } else {
    radiobtntext2.style.visibility = "hidden";
  }

  if (radio.checked == true) {
    radiobtn3.style.visibility = "visible";
  } else {
    radiobtn3.style.visibility = "hidden";
  }

  if (radio.checked == true) {
    radiobtntext3.style.visibility = "visible";
  } else {
    radiobtntext3.style.visibility = "hidden";
  }
}

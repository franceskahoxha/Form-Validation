document
  .getElementById("flexRadioDefault1")
  .addEventListener("click", function () {
    ["radiobtn", "radiobtn2", "radiobtn3"].forEach(function (id) {
      document.getElementById(id).checked = false;
    });
    return false;
  });

document
  .getElementById("flexRadioDefault2")
  .addEventListener("click", function () {
    ["radiobtn", "radiobtn2", "radiobtn3"].forEach(function (id) {
      document.getElementById(id).checked = false;
    });
    return false;
  });

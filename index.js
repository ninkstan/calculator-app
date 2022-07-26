function del() {
  value = document.querySelector(".display").value;
  document.querySelector(".display").value = value.substr(0, value.length - 1);
}

function reset() {
  document.querySelector(".display").value = "";
}

function theme2() {}

function theme3() {}

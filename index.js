function del() {
  var value = document.querySelector(".display").value;
  document.querySelector(".display").value = value.substr(0, value.length - 1);
}

function reset() {
  document.querySelector(".display").value = "";
}

const toggle1 = document.querySelector(".toggle-1");
const toggle2 = document.querySelector(".toggle-2");
const toggle3 = document.querySelector(".toggle-3");
const Theme = document.body;

toggle1.onclick = function () {
  toggle1.style.backgroundColor = "hsl(6, 63%, 50%)";
  toggle2.style.backgroundColor = "hsl(223, 31%, 20%)";
  toggle3.style.backgroundColor = "hsl(223, 31%, 20%)";
  Theme.classList.add("theme1");
  Theme.classList.remove("theme2");
  Theme.classList.remove("theme3");
};
toggle2.onclick = function () {
  toggle1.style.backgroundColor = "hsl(0, 5%, 81%)";
  toggle2.style.backgroundColor = "hsl(25, 98%, 40%)";
  toggle3.style.backgroundColor = "hsl(0, 5%, 81%)";
  Theme.classList.add("theme2");
  Theme.classList.remove("theme1");
  Theme.classList.remove("theme3");
};
toggle3.onclick = function () {
  toggle1.style.backgroundColor = "hsl(268, 71%, 12%)";
  toggle2.style.backgroundColor = "hsl(268, 71%, 12%)";
  toggle3.style.backgroundColor = "hsl(176, 100%, 44%)";
  Theme.classList.add("theme3");
  Theme.classList.remove("theme2");
  Theme.classList.remove("theme1");
};

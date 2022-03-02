//calc.html
//2 input su sk

// ir 2 mygtukai

//1 mygtukas dauginti

//2 mygtukas sudeti

//html isvedam rezultata

"use strict";

const inputDaug = document.getElementById("num1daug");
const inputSum = document.getElementById("num2sum");
const btnDaug = document.getElementById("daug");
const btnSum = document.getElementById("sum");
const displayDaug = document.getElementById("daugyba");
const displaySum = document.getElementById("sudetis");

btnDaug.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const daugyba = inputDaug.value;
  const sudetis = inputSum.value;
  displayDaug.textContent = daugyba * sudetis;
}

btnSum.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  const num1 = num1.value;
  const num2 = num2.value;
  displaySum.textContent = num1 + num2;
}

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
const displayRes = document.getElementById("result");

btnDaug.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  let daugyba = inputDaug.value;
  let sudetis = inputSum.value;
  displayRes.textContent = daugyba * sudetis;
}
btnSum.addEventListener("click", fs);
function fs(event) {
  event.preventDefault();
  let daugyba = parseInt(inputDaug.value);
  let sudetis = parseInt(inputSum.value);

  sudetis = displayRes.textContent = daugyba + sudetis;
}

const numberEl = document.getElementById("number");
const btnEl = document.querySelector("button");

let random = Math.floor(Math.random() * 5 + 1);
console.log(random);

btnEl.addEventListener("click", fn);
function fn(event) {
  event.preventDefault();
  let number = numberEl.value;

  if (number != random) {
    alert("Nope!");
  } else {
    number = random;
    alert("Yep!");
  }
}

//1. Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
// L
// L
// L
// L L L L

// const displayEl = document.getElementById("display");

// function typeL(num) {
//   const letter = "L";
//   let allLetters = "";
//   for (let i = 0; i <= num; i++) {
//     displayEl.innerHTML += `${letter}<br>`;
//     if (i === num - 1) {
//       displayEl.innerHTML += letter;
//     }
//   }
// }

// typeL(6);

const displayEl = document.getElementById("display");
function typeL(n) {
  for (let i = 0; i < n - 1; i++) {
    displayEl.innerHTML += `L<br/>`;
  }
  for (let i = 0; i < n; i++) {
    displayEl.innerHTML += "L";
  }
}
typeL(5);

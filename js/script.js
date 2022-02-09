/** @format */

const backPack = document.getElementById("backpack");
// backPack.style.color = "red";
// backPack.style.backgroundColor = "blue";
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  cards.style.borderRadius = "50%";
}

const ul = document.getElementsByTagName("ul");
ul.removeChild(e.target);

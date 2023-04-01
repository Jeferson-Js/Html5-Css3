const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

  this.classList.add("is-draging");
}

function dragend() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));

  this.classList.remove("is-draging");
}

//place where we will drop cards

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", draleave);
  dropzone.addEventListener("drop", drop);
});


function dragover() {
  this.classList.add("over");
  const cardBeing = document.querySelector(".is-draging");

  this.appendChild(cardBeing);
}

function draleave() {
  this.classList.remove("over");
}

function drop() {
  this.classList.remove("over");
}

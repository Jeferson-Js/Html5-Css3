const navbarToggle = document.querySelector(".ph-list");
const lista = document.querySelector("ul");

navbarToggle.addEventListener("click", function () {
  lista.classList.toggle("active");
});

const navbarToggle = document.querySelector(".navbar__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

navbarToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

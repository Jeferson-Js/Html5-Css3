const aside = document.querySelector("aside");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  aside.classList.toggle("active");
});

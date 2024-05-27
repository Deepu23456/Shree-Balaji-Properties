const menuClose = document.querySelector(".menuClose");
const menuOpen = document.querySelector(".menuOpen");
const nav = document.querySelector("nav");

menuOpen.addEventListener("click", () => {
  nav.classList.add("openup");
});
menuClose.addEventListener("click", () => {
  nav.classList.remove("openup");
});

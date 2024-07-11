const menu = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");



menu.addEventListener("click", () => nav.classList.toggle("active"));
console.log(nav)
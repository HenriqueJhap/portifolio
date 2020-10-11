var hamburguer = document.querySelector(".hamburguer");

document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
});
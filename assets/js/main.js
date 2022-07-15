const buttonCommunity = document.querySelector(".container-community");
const listCommunity = document.querySelector(".list-community");
const buttonMenu = document.querySelector(".button-menu");
const itemsCommunity = document.querySelectorAll(".item-community");
const navbar = document.querySelector(".header-nav");

buttonCommunity.addEventListener("click", () => {
  listCommunity.classList.toggle("on");
  buttonMenu.classList.toggle("on");
});

buttonCommunity.addEventListener("focusout", () => {
  listCommunity.classList.remove("on");
  buttonMenu.classList.remove("on");
});

const before = [];
window.addEventListener("scroll", (e) => {
  before.pop() < window.scrollY && window.scrollY > 100
    ? navbar.classList.add("off")
    : navbar.classList.remove("off");
  listCommunity.classList.contains("on") &&
    window.scrollY > 100 &&
    listCommunity.classList.remove("on");
  before.push(window.scrollY);
});

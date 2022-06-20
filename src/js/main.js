const ButtonList = document.querySelector(".button-list-sns");
const listSns = document.querySelector(".list-sns");
const itemsSns = document.querySelectorAll(".sns");
const navbar = document.querySelector(".bar-nav");

ButtonList.addEventListener("click", () => {
  listSns.classList.toggle("on");
});

ButtonList.addEventListener("focusout", () => {
  listSns.classList.remove("on");
});

const before = [];
window.addEventListener("scroll", (e) => {
  before.pop() < window.scrollY && window.scrollY > 100
    ? navbar.classList.add("off")
    : navbar.classList.remove("off");
  listSns.classList.contains("on") &&
    window.scrollY > 100 &&
    listSns.classList.remove("on");
  before.push(window.scrollY);
});

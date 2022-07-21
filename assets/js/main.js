const url =
  "https://cors-anywhere.herokuapp.com/https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fameuniverse";
const header = {
  rss_url: "https://medium.com/feed/@fameuniverse",
};

// 최신 포스트 받아오기
// async function getUser() {
//   try {
//     const res = await axios.get(url, {
//       headers: header,
//     });

//     let { title, pubDate, thumbnail, content, link } = res.data.items[0];
//     let contentLength = content.length;
//     content = content.substring(
//       content.indexOf("<p>" + 3),
//       content.indexOf("</p>")
//     );
//     console.log(content);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getUser();

const buttonCommunity = document.querySelector(".container-community");
const listCommunity = document.querySelector(".list-community");
const buttonMenu = document.querySelector(".button-menu");
const itemsCommunity = document.querySelectorAll(".item-community");
const menubar = document.querySelector(".menubar");
const buttonHome = document.querySelector(".button-home");

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
  if (before.pop() < window.scrollY && window.scrollY > 100) {
    menubar.classList.add("off");
    buttonHome.classList.add("off");
  } else {
    menubar.classList.remove("off");
    buttonHome.classList.remove("off");
  }
  listCommunity.classList.contains("on") &&
    window.scrollY > 100 &&
    listCommunity.classList.remove("on");
  before.push(window.scrollY);
});

ScrollReveal().reveal("section", { distance: "100px", duration: 2000 });

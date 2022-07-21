// medium api 요청
const url =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fameuniverse";

// 최신 포스트 받아오기
async function getUser() {
  try {
    const res = await axios.get(url, {});
    let { title, pubDate, thumbnail, content, link } = res.data.items[0];
    let contentLength = content.length;
    const startContent = content.indexOf("<p>") + 3;
    const stopContent = content.indexOf("</p>");
    content = content.substring(startContent, stopContent);

    console.log("title:", title);
    console.log("pubDate:", pubDate);
    console.log("thumbnail:", thumbnail);
    console.log("content:", content);
    console.log("link:", link);
  } catch (err) {
    console.error(err);
  }
}
getUser();

// company 페이지 반응형 background video
addEventListener("DOMContentLoaded", () => {
  function makeVideoResponsible() {
    const target = document.querySelector(".testvideo");
    if (target) {
      const currentRatio = innerWidth / innerHeight;
      const videoRatio = 1.7777777777777777;
      if (videoRatio > currentRatio) {
        target.style.width = "auto";
        target.style.height = "100vh";
      } else {
        target.style.height = "auto";
        target.style.width = "100vw";
      }
    }
  }

  makeVideoResponsible();
  addEventListener("resize", makeVideoResponsible);
});

// 네비게이션바 마우스 이벤트
const linkMenu = document.querySelector(".container-link");
const gray03 = "#5B5B5B";
const navy = "#14003D";
const primary = "#6B1FFF";
const blue = "#30008F";
linkMenu.addEventListener("mousedown", (e) => {
  e.target.style.color = gray03;
});

// 네비게이션바 클릭 이벤트
const buttonCommunity = document.querySelector(".container-community");
const listCommunity = document.querySelector(".list-community");
const buttonMenu = document.querySelector(".button-menu");
const itemsCommunity = document.querySelectorAll(".item-community");
const menubar = document.querySelector(".menubar");
const buttonHome = document.querySelector(".button-home");

buttonCommunity.addEventListener("click", (e) => {
  listCommunity.classList.toggle("on");
  buttonMenu.classList.toggle("on");
});

buttonCommunity.addEventListener("focusout", () => {
  listCommunity.classList.remove("on");
  buttonMenu.classList.remove("on");
});

buttonCommunity.addEventListener("mousedown", () => {
  buttonCommunity.style.backgroundColor = navy;
});

buttonCommunity.addEventListener("mouseup", () => {
  buttonCommunity.style.backgroundColor = primary;
});

buttonCommunity.addEventListener("mouseover", () => {
  buttonCommunity.style.backgroundColor = blue;
});

// 헤더 스크롤 반응형 이벤트
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

// 섹션 반응형 이벤트
ScrollReveal().reveal("section", { distance: "100px", duration: 2000 });

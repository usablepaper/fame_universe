// medium api 요청
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fameuniverse';

// 최신 포스트 받아오기
async function getUser() {
    try {
        const res = await axios.get(url, {});
        const postsArr = res.data.items.slice(0, 5);
        createArticles(postsArr);
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
}
getUser().then(() => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
function createArticles(arr) {
    arr.map((post) => {
        let { title, pubDate, thumbnail, content, link } = post;
        let contentLength = content.length;
        const startContent = content.indexOf('<p>') + 3;
        const stopContent = content.indexOf('</p>');
        content = content.substring(startContent, stopContent);

        const swiperWrapper = document.querySelector('.swiper-wrapper');
        const createLink = document.createElement('a');
        const createArticle = document.createElement('article');
        const createImg = document.createElement('div');
        const createWrapper = document.createElement('div');
        const createTitle = document.createElement('h3');
        const createContent = document.createElement('p');
        const createDate = document.createElement('span');
        const swiperSlide = document.createElement('div');

        swiperWrapper.appendChild(swiperSlide);
        swiperSlide.classList.add('swiper-slide');

        // 링크 태그 추가
        swiperSlide.appendChild(createLink);
        createLink.setAttribute('href', link);
        createLink.setAttribute('class', 'link-article');
        createLink.innerHTML = 'Read more articles on Medium >';

        // article 태그추가
        createLink.appendChild(createArticle);
        createArticle.setAttribute('class', 'article-media');

        // background img 추가
        createArticle.appendChild(createImg);
        createImg.setAttribute('class', 'img-article');
        createImg.style.backgroundImage = `url(${thumbnail})`;

        // wrapper content 추가
        createArticle.appendChild(createWrapper);
        createWrapper.setAttribute('class', 'wrapper-content-article');

        // date 추가
        createWrapper.appendChild(createDate);
        createDate.setAttribute('class', 'date-updated');
        createDate.innerHTML = pubDate;

        // 타이틀 추가
        createWrapper.appendChild(createTitle);
        createTitle.setAttribute('class', 'title-article');
        createTitle.innerHTML = title;

        // 본문 추가
        createWrapper.appendChild(createContent);
        createContent.setAttribute('class', 'content-article');
        createContent.innerHTML = content;
    });
}

// company 페이지 반응형 background video
addEventListener('DOMContentLoaded', () => {
    function makeVideoResponsible() {
        const target = document.querySelector('.video-background-company');
        if (target) {
            const currentRatio = innerWidth / innerHeight;
            const videoRatio = 1.7777777777777777;
            if (videoRatio > currentRatio) {
                target.style.width = 'auto';
                target.style.height = '100vh';
            } else {
                target.style.height = 'auto';
                target.style.width = '100vw';
            }
        }
    }

    makeVideoResponsible();
    addEventListener('resize', makeVideoResponsible);
});

addEventListener('DOMContentLoaded', () => {
    function makeVideoResponsible() {
        const target = document.querySelector('.video-background-fame');
        if (target) {
            const currentRatio = innerWidth / innerHeight;
            const videoRatio = 1;
            if (videoRatio > currentRatio) {
                target.style.width = 'auto';
                target.style.height = '100vh';
                target.style.transform = 'translate(-50%, 0)';
            } else {
                target.style.height = 'auto';
                target.style.width = '100vw';
                target.style.transform = 'translate(-50%, -20%)';
            }
        }
    }

    makeVideoResponsible();
    addEventListener('resize', makeVideoResponsible);
});

// 네비게이션바 마우스 이벤트
const linkMenu = document.querySelector('.container-link');
const gray03 = '#5B5B5B';
const navy = '#14003D';
const primary = '#6B1FFF';
const blue = '#30008F';
linkMenu.addEventListener('mousedown', (e) => {
    e.target.style.color = gray03;
});

// 네비게이션바 클릭 이벤트
const buttonCommunity = document.querySelector('.container-community');
const listCommunity = document.querySelector('.list-community');
const buttonMenu = document.querySelector('.button-menu');
const itemsCommunity = document.querySelectorAll('.item-community');
const menubar = document.querySelector('.menubar');
const buttonHome = document.querySelector('.button-home');

buttonCommunity.addEventListener('click', (e) => {
    listCommunity.classList.toggle('on');
    buttonMenu.classList.toggle('on');
});

buttonCommunity.addEventListener('focusout', () => {
    listCommunity.classList.remove('on');
    buttonMenu.classList.remove('on');
});

buttonCommunity.addEventListener('mousedown', () => {
    buttonCommunity.style.backgroundColor = navy;
});

buttonCommunity.addEventListener('mouseup', () => {
    buttonCommunity.style.backgroundColor = primary;
});

buttonCommunity.addEventListener('mouseover', () => {
    buttonCommunity.style.backgroundColor = blue;
});

buttonCommunity.addEventListener('mouseout', () => {
    buttonCommunity.style.backgroundColor = primary;
});

// 헤더 스크롤 반응형 이벤트
const before = [];
window.addEventListener('scroll', (e) => {
    if (before.pop() < window.scrollY && window.scrollY > 100) {
        menubar.classList.add('off');
        buttonHome.classList.add('off');
    } else {
        menubar.classList.remove('off');
        buttonHome.classList.remove('off');
    }
    listCommunity.classList.contains('on') && window.scrollY > 100 && listCommunity.classList.remove('on');
    before.push(window.scrollY);
});

// 섹션 반응형 이벤트
ScrollReveal().reveal('.index-body section', {
    distance: '100px',
    duration: 2000,
});

// BEOMS 슬라이더를 위한 코드
addEventListener('DOMContentLoaded', () => {
    setTimeout();
});

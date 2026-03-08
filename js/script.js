console.log("読み込まれた！");

const btn = document.querySelector(".js-hamburger");
btn.addEventListener("click", () => {
    console.log("クリックされた！");
})

const hamburger = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});
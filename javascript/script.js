let searchBtn = document.querySelector(".search .btn");
let closeBtn = document.querySelector(".search .close");
let langBox = document.querySelectorAll(".lang-box");
let lang = document.querySelectorAll(".lang-box .lang");
let universityBtn = document.querySelector(".header .drow-down");
let modal = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".modal .close-btn");

searchBtn.addEventListener("click", (e) => {
  searchBtn.style.width = "160px";
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchBtn.style.width = "40px";
});

langBox.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.children[2].classList.toggle("open");
  });
});

universityBtn.addEventListener("click", (e) => {
  modal.classList.toggle("notAppear");
});

modalCloseBtn.addEventListener("click", (e) => {
  modal.classList.add("notAppear");
})

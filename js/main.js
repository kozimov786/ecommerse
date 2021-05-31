window.addEventListener('DOMContentLoaded',()=>{
    let openBurger = document.querySelector('.burger')
    let closeBurger = document.querySelector('.active-burger')

    openBurger.addEventListener('click',()=>{
        document.querySelector('.sitenav').classList.toggle('active-burger')
        document.querySelector('.baskets-wrapper').classList.toggle('active-burger')
        document.querySelector('.search-btn').classList.toggle('disabled-search')
    })
    document.querySelector('.search-btn')('click',()=>{
        document.querySelector('.input-search').classList.toggle('search-enabled')
    })
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("nav-open");
});


})
feather.replace();

const nextEl = document.getElementById("next");
const previousEl = document.getElementById("previous");
const sliderEl = document.getElementById("slider");
nextEl.addEventListener("click", onNextClick);
previousEl.addEventListener("click", onPreviousClick);

function onNextClick() {
  const imgWidth = sliderEl.offsetWidth;
  sliderEl.scrollLeft += imgWidth;
}
function onPreviousClick() {
  const imgWidth = sliderEl.offsetWidth;
  sliderEl.scrollLeft -= imgWidth;
}
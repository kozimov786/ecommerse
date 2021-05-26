window.addEventListener('DOMContentLoaded',()=>{
    let openBurger = document.querySelector('.burger')
    let closeBurger = document.querySelector('.active-burger')

    openBurger.addEventListener('click',()=>{
        document.querySelector('.sitenav').classList.toggle('active-burger')
        document.querySelector('.baskets-wrapper').classList.toggle('active-burger')
    })
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("nav-open");
});
    
})
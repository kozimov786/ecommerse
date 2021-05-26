window.addEventListener('DOMContentLoaded',()=>{
    let openBurger = document.querySelector('.burger-btn')
    let closeBurger = document.querySelector('.active-burger')

    openBurger.addEventListener('click',()=>{
        document.querySelector('.sitenav').classList.toggle('active-burger')
        document.querySelector('.baskets-wrapper').classList.toggle('active-burger')
    })
    
})
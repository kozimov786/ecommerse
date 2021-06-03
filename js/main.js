window.addEventListener('DOMContentLoaded',()=>{
    let openBurger = document.querySelector('.burger')
    let closeBurger = document.querySelector('.active-burger')

    openBurger.addEventListener('click',()=>{
        document.querySelector('.sitenav').classList.toggle('active-burger')
        document.querySelector('.baskets-wrapper').classList.toggle('active-burger')
        document.querySelector('.search-btn').classList.toggle('disabled-search')
    })
    document.querySelector('.search-btn').addEventListener('click',()=>{
        document.querySelector('.input-search').classList.toggle('search-enabled')
    })
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("nav-open");
    });
});




  let min = 1;
  let max = 100;
  
  const calcLeftPosition = (value) => (100 / (100 - 10)) * (value - 10);
  
  $("#rangeMin").on("input", function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
    $("#min").html(newValue);
    $("#line").css({
      left: calcLeftPosition(newValue) + "%",
      right: 100 - calcLeftPosition(max) + "%"
    });
  });
  
  $("#rangeMax").on("input", function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
    $("#max").html(newValue);
    $("#line").css({
      left: calcLeftPosition(min) + "%",
      right: 100 - calcLeftPosition(newValue) + "%"
    });
  });
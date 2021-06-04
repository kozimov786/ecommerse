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


document.querySelector('.view-link__active-grid').addEventListener('click',()=>{
  document.querySelector('.product-card__wrapper').classList.add('display-none')
  document.querySelector('.grid-view__section').classList.remove('display-none')
})
document.querySelector('.view-link__active-list').addEventListener('click',()=>{
  document.querySelector('.grid-view__section').classList.add('display-none')
  document.querySelector('.product-card__wrapper').classList.remove('display-none')
})
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


  $(document).ready(function () {
    $('#autoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function () {
        $('#autoWidth').removeClass('cS-hidden');
      }
    });
  });
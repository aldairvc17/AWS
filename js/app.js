$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        navText:["<div class='nav-btn prev-slide'><img src='assets/img/arrow-left.png'></div>","<div class='nav-btn next-slide'><img src='assets/img/arrow-right.png'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
  });


  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
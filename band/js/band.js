$(document).ready(function () {
    $('a[class$=search]').addClass('fas fa-search');

    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: 'slide',
        speed:1500,
        autoplay: {
            delay: 2000,
          },
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      $('.header>a').click(function (e) { 
          e.preventDefault();
          
      });
      $('.ticket-buy a').click(function (e) { 
          e.preventDefault();
          
      });
      $('.contact-form-bt input[type="submit"]').click(function (e) { 
          e.preventDefault();
      });
      $('.ft-icon').click(function (e) { 
          e.preventDefault();
          
      });
});
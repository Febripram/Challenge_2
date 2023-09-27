const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
      centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
          1000: {
              slidesPerView: 2,
              spaceBetween: 20,
          }
      }
  
  });
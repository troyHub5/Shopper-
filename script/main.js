
const swiper = new Swiper('.swiper', {
  
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 93,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
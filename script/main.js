
const swiper1 = new Swiper('.swiper1', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 39,
   
  navigation: {
    nextEl: '.swiper-button-next',
  },
  
});


const swiper2 = new Swiper('.swiper2', {
    
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 39,
    
  navigation: {
    nextEl: '.swiper-button-next',
  },

});

const swiper3 = new Swiper('.swiper3', {
           
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
//= require jquery
//= require bootstrap

const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY >= 800) {
        navbar.classList.add('navbar-wagon-white');
      } else {
        navbar.classList.remove('navbar-wagon-white');
      }
    });
  }
};

initUpdateNavbarOnScroll();

document.addEventListener("DOMContentLoaded",function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
});


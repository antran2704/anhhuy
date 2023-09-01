// swiper timeline
new Swiper(".swiper-timeline", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

new Swiper(".swiper-why", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

// swiper other blog
new Swiper(".swiper-blog", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
      pagination: false
    },
    768: {
      slidesPerView: 2,
    }
  }
});
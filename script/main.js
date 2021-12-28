const channel = () => {
  let swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })
}

const recommended = () => {
  let swiper = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-recommended-button-next',
      prevEl: '.channel-recommended-button-prev',
    },
  })
}

const food = () => {
  let swiper = new Swiper('.food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-food-recommended-button-next',
      prevEl: '.channel-food-recommended-button-prev',
    },
  })
}

channel();
recommended();
food();
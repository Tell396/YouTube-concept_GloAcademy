const channel = () => {
  let swiper = new Swiper('.channel-slider', {
    
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },

    
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })
}

const recommended = () => {
  let swiper = new Swiper('.recommended-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      }
    },

    navigation: {
      nextEl: '.channel-recommended-button-next',
      prevEl: '.channel-recommended-button-prev',
    },
  })
}

const food = () => {
  let swiper = new Swiper('.food-slider', {
    loop: true,
    slidesPerView: 6,

    
    navigation: {
      nextEl: '.channel-food-recommended-button-next',
      prevEl: '.channel-food-recommended-button-prev',
    },
  })
}

channel();
recommended();
food();


const searchBtn = document.querySelector('.mobile-search');

  
const mobileSearch = () => {
  const mobileSearchGroup = document.querySelector('.input-group')
  let isOpen = false

  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-search')) {
      mobileSearchGroup.classList.add('is-open')
      isOpen = true
    } else if (!e.target.closest('.input-group') && isOpen) {
      mobileSearchGroup.classList.remove('is-open')
      isOpen = false
    }
  })
}


if (document.documentElement.scrollWidth <= 640) {
  swiperMyChannel.destroy()
  swiperRecommended.destroy()
  swiperFoodDrink.destroy()
}
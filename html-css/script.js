const swiper = new Swiper(".swiper", {
    loop: true, 
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView:1
      }
    },
});

window.addEventListener('scroll', function () {
      const elements = document.querySelectorAll('.fade-in-element');
      const windowHeight = window.innerHeight;

      elements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          element.classList.add('fade-in-visible');
        }
    });
});
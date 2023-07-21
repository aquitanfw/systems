$('.accordeon__question__object').on('click', function () {
    // $(this) - эл-т, по которому кликнули
    // next() - следующий эл-т
    let answer = $(this).next();
    // $('.accordeon__question__object').removeClass('active-accordeon')
    // slideToggle() - развернуть эл-т (display: block), если он скрыт
    // или свернуть эл-т (display: none), если он показан
    $(this).toggleClass('active-accordeon')
    answer.slideToggle();
    // взять все .akk__answer, которые не answer
    // и скрыть их при помощи slideUp()
    // $('.accordeon__answer__object').not(answer).slideUp();

  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".mySwiper_video", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

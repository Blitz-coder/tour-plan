$(document).ready(function () {

  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    effect: "fade",

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalOverlay = $(".modal__overlay");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  closeModalOverlay.on('click', closeModal);

  //  Убрать модальное окно клавишей Esc
  $(document).keydown(function (eventObject) {
    if (eventObject.which == 27) {
      console.log("клавиша Esc");
      closeModal(event);
    };
  });


  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }


});
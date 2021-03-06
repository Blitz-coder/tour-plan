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
    // autoHeight: true,

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
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalide",
      messages: {
        name: {
          required: "Please enter a name",
          minlength: "Name is too short",
        },
        email: {
          required: "Please enter your email",
          email: "Use format name@domain.com",
        },
        phone: {
          required: "Phone is required",
        },
      },
    });
  });


  $('input[name="phone"]').mask('+7 (999) 999-99-99');

  AOS.init();

  $(function () {
    $("img.lazy").Lazy();
  });


  let map_container = document.getElementById('map_container');
  let options_map = {
    once: true,
    passive: true,
    capture: true
  };
  map_container.addEventListener('click', start_lazy_map, options_map);
  map_container.addEventListener('mouseover', start_lazy_map, options_map);
  map_container.addEventListener('touchstart', start_lazy_map, options_map);
  map_container.addEventListener('touchmove', start_lazy_map, options_map);

  let map_loaded = false;

  function start_lazy_map() {
    if (!map_loaded) {
      let map_block = document.getElementById('ymap_lazy');
      map_loaded = true;
      map_block.setAttribute('src', map_block.getAttribute('data-src'));
      map_block.removeAttribute('data-src');
    }
  }


});
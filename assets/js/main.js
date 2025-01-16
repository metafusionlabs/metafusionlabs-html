jQuery(document).ready(function ($) {
  // menu bg add
  function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
  }
  $('.testimonial-slider').slick({
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $('.testimonial-left'),
    nextArrow: $('.testimonial-right'),
    responsive: [ 
      {
        breakpoint:1080,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint:580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
          $navbarText.removeClass("show");
      }
  });

  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg-fixed');
      } else {
          $('header').removeClass('menu-bg-fixed');
      }
      checkScroll();
      updateActiveNav();
  });

  // Run on page load
  checkScroll();

  // Function to update active nav link based on scroll position
  function updateActiveNav() {
      const scrollPosition = $(window).scrollTop() + $(window).height() / 2; // Adjust based on needs
      const sections = $('section'); // Assumes sections are wrapped in <section> tags

      sections.each(function () {
          const sectionTop = $(this).offset().top;
          const sectionHeight = $(this).outerHeight();
          const id = $(this).attr('id');

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              $('.nav-link').removeClass('active');
              $('.nav-link[href="#' + id + '"]').addClass('active');
          }
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links
  const offset = 100; // Gap from the top

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior
          const targetId = this.getAttribute("href").substring(1); // Get the target section ID
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              const topPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

              window.scrollTo({
                  top: topPosition,
                  behavior: "smooth" // Smooth scrolling
              });
          }
      });
  });
});

AOS.init();

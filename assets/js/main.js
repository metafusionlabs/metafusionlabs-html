
jQuery(document).ready(function ($) {
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
 
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
    });
    // Run on page load
    $(document).ready(function () {
      checkScroll();
    });

    // Run on scroll
    $(window).on("scroll", function () {
      checkScroll();
    });

})

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
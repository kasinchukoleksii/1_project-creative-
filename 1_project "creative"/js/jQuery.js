$(document).ready(function() {
      $(".logotipe").on("click", function() {
            $("nav").toggleClass("showing");
      });
});
// Scrolling Effect
$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }
      else {
            $('nav').removeClass('black');
      }
})

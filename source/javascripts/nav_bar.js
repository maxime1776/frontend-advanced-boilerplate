$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 445) {
      $(".navbar-scroll").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar-scroll").css({
        "margin-top": "0px"
      });
    }
  });
});

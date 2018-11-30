$(document).ready(function() {

  // Slide up landing page and fade in on page load

  var $mainLogo = $("#main_logo")
  var $topCurtain = $("#top_curtain")
  var $bottomCurtain = $("#bottom_curtain")


  setTimeout(showLogo, 300)  // call showPage function after 1 seconds

  function showLogo() {
    $mainLogo.animate({
        opacity: '1.0',
      }, 500, "swing", function() {
          $topCurtain.animate({
            height: '0px'
          }, 500, "linear")
          $bottomCurtain.animate({
            height: '0px'
          }, 500, "linear")
      })
  }




})

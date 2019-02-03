$(document).ready(function() {

  // Slide up landing page and fade in on page load

  var $landingPage = $("#landing_page")

  function showPage() {
    $landingPage.animate({
        opacity: '1.0',
        marginTop: '60px'
      }, 500, "swing")
  }

  setTimeout(showPage, 400)  // call showPage function after 0.4 seconds



})

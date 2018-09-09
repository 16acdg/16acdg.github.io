// Display white rectangle next to selected navigation link
// Do rectangle animation when a navigation link is clicked
$(document).ready(function() {

  var $home = $('#homeNav');
  var $about = $('#aboutMeNav');
  var $skills = $('#skillsNav');
  var $contact = $('#contactNav');



  $(window).on('scroll', function(index) {
    if ($contact.isInViewport()) {
      $('.navItemBox:eq(3)').children('div').css('width','7px');
    } else {
      $('.navItemBox:eq(3)').children('div').css('width','0px');
    }
  })


  // $(window).on('scroll', function() {
  //   $('.navTargetElement').each(function(index) {
  //
  //     // Increase index if it is beyond where the resume would be to proceed to the next big section of webpage;
  //     // resume is not visible on screen so it will never be highlighted when just scrolling through the page
  //     index = (index >= 2) ? index+1 : index;
  //
  //     if ($(this).isInViewport()) {
  //       $('.navItemBox:eq(' + index + ')').children('div').css('width','7px');
  //     } else {
  //       $('.navItemBox:eq(' + index + ')').children('div').css('width','0px');
  //     }
  //   })
  // });

  $.fn.isInViewport = function() {
    var elementPos = $(this).getBoundingClientRect().y;
    return elementTop < 100
  };



  // Applies white rectangle stretch animation over navigation element when a main link is clicked
  $('.navItemBox').each(function() {

    $(this).on('click', function() {

      // if element clicked is the resume navigation, don't perform the highlight width animation because user is leaving this  page
      if (this.getAttribute.id == '#resumeNav') {

        console.log('TEST!!');
        $(this).children('div').css('width','7px');

      } else {

        var instance = this;  // Save this iterated instance of item with navItemBox class so it can also be referenced in the
        $(instance).children('div').animate({
          // CSS applied over 250ms
          width: '82%',
          marginBottom: '0px'
        }, 150, 'swing', function() {
          // Executes after animation has finished;
          // Return to original width with animation
          $(instance).children('div').animate({
            width: '7px',
          }, 350);
        });
        // Hide the highlight for every other navigation item when a new nav item is clicked
        $('.navItemBox').not($(this)).children('div').css('width','0px');

      }
    });
  });









});

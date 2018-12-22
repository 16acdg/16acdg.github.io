// Adds smooth scrolling to page navigation links

$(document).ready(function() {
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var offset = -110; // offset to make scroll anim put the header above the section title

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top + offset
      }, 800, function(){
        console.log($(hash).offset().top);
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash + offset;
      });
    } // End if
  });
});

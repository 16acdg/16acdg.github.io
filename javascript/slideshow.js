// Script that controls the functionality of the slideshow on the main page:
//  Slideshow automatically proceeds thru images
//  User can also manually change image via nav arrows
//  But when shrunken below 949px, these buttons are hidden due to a formatting decision, so user thus loses nav functionality here

var slideIndex = 0;

showSlide(slideIndex);


// update slide every X seconds

setInterval("showSlide(1)", 5000)


function showSlide(n) {

    slideIndex += n;

    var slides = document.getElementsByClassName("slideshow_slide");

    if (slideIndex > slides.length-1) {slideIndex = 0} // loop to beginning from end
    if (slideIndex < 0) {slideIndex = slides.length-1} // loop to end from beginning

    console.log(slideIndex)
    // Hide every slide
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    // Unhide the current slide
    slides[slideIndex].style.display = "block";

    // fadeSlide(slides[slideIndex])

}

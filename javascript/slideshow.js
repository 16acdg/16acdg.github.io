// Script that controls the functionality of the slideshow on the main page

var slideIndex = 0;

showSlide(slideIndex);


function showSlide(n) {

    slideIndex += n;

    var slides = document.getElementsByClassName("slideshow_slide");

    if (slideIndex > slides.length-1) {slideIndex = 0} // loop to beginning from end
    if (slideIndex < 0) {slideIndex = slides.length-1} // loop to end from beginning

    // Hide every slide
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    // Unhide the current slide
    slides[slideIndex].style.display = "block";

    // fadeSlide(slides[slideIndex])

}


// // Fade animation when new slide is introduced
// function fadeSlide(slide) {
//
//   var alpha = 0
//   slide.style.opacity = alpha;
//
//   var itv = setInterval(fade, 10)
//
//   function fade() {
//     if (alpha == 1) { // end animation when alpha is 1, i.e. slide is fully opaque
//         clearInterval(itv)
//         alpha = 0
//     }
//     else {
//         slide.style.opacity = alpha
//         alpha += 0.02
//     }
//   }
//
// }

/*

h4 {
  font-size: 30px;
  font-weight: 700;
}

#philosphy_container {
  display: block;
  margin-bottom: 100px;
}

#philosphy_container h4 {
  float: left;
}
#philosphy_container p {
  margin-left: 50px;
  width: 600px;
  float: right;
  text-align: left;
  display: block;
}
/*
Research:

We aspire to explore the ever advancing field of artificial intelligence and computer vision to remain at the forefront of this technology. Our team desires to create leading autonomous robots through the development of advanced solutions, algorithms, and materials.



Education:

As a growing university club, we aim to provide students exposure to real world engineering design, an appreciation for engineering, and a sense of accomplishment. Members are able to learn mechanical, electrical, and computer software design skills, while physically building final products. In addition to these technical skills, Queen’s Knights encourages the development of project management and other industry-transferable skills which are critical to success in today’s modernized society. Finally, we foster innovative ideas, solutions, and have an immense passion for ….



Community:

We recognize the strong sense of community at Queen’s University and intend to contribute to this outstanding culture. As one of the few Canadian universities competing internationally and in the RoboMaster event, we are honoured to represent Canada on this global platform. Moreover, we are pushing Queen’s University by promoting robotics and STEM fields through the creation of leading robot designs.
*/

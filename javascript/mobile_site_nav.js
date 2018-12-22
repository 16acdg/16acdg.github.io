// Script that provides functionality for interactive site navigation when viewed on mobile

var menuIcon = document.getElementById("site_nav_icon")
var menuLinks = document.getElementById("nav_ul").getElementsByTagName("LI") // unordered list of site links
var nav = document.getElementsByTagName("NAV")[0];

console.log("SCRIPT CONNECTED!");

var isMenuShown = false;

// called by image with id site_nav_icon in index.html
function toggleMenu() {

  isMenuShown = !isMenuShown

  if (isMenuShown) {
    // disable scrolling
    document.getElementsByTagName("HTML")[0].style.overflow = "hidden";

    // show all menu links starting from the second element
    for (var i=1; i < menuLinks.length; i++) {
      menuLinks[i].style.display="block";
    }

    nav.style.height = "100%";  // get nav menu to fill screen
  }
  else {
    // enable scrolling
    document.getElementsByTagName("HTML")[0].style.overflow = "scroll";

    // show all menu links starting from the second element
    for (var i=1; i < menuLinks.length; i++) {
      menuLinks[i].style.display="none";
    }

    nav.style.height = "90px";  // get nav menu to fill screen
  }



}

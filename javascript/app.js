console.log("app.js linked");

window.onload = () => {
  populateProjects()
  let url = window.location.href
  let highlightContactArg = url.substring(url.indexOf('highlightContact') + 17, url.length)
  if (highlightContactArg == 'true') {
    highlightContacts(250)
  }
}

// Shows a background for the show nav button for some necessary visibility
let $header = $("#nav-button-perma-overlay")
let isHeaderShown = true
document.onmousemove = (event) => {
  if (event.clientY < 100) {
    if (!isHeaderShown) {
      $header.animate({
        'top': '0'
      }, 300)
      isHeaderShown = true
    }
  } else {
    if (isHeaderShown) {
      $header.animate({
        'top': '-100px'
      }, 300)
      isHeaderShown = false
    }
  }
}

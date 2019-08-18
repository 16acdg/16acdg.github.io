var app = document.getElementById("app")
const url = 'https://shielded-wave-89396.herokuapp.com/data'

fetch(url).then(async (response) => {
  response = await response.json()
  response.sort((book1, book2) => { // Sort books by read or not
    return book1.read === book2.read ? 0 : book1.read ? 1 : -1;
  })
  let printedReadTitle = false
  let printedReadingNextTitle = false

  let index = 0
  let yetToRead = document.getElementById('yet-to-read')
  while (!response[index].read) {
    yetToRead.innerHTML += parseBook(response[index])
    index++
  }

  let alreadyRead = document.getElementById('already-read')
  while(response[index]) {
    alreadyRead.innerHTML += parseBook(response[index])
    index++
  }

  // Slide up landing page and fade in on page load
  var $landingPage = $("#page")
  function showPage() {
    document.getElementById('loading-text').style.display = 'none'
    console.log('setting landing page')
    $landingPage.animate({
        opacity: '1.0',
        marginTop: '60px'
      }, 500, "swing")
  }
  setTimeout(showPage, 400)  // call showPage function after 1 seconds

}).catch((err) => {
  app.innerHTML = `<p>Error: ${err}</p>`
})


function parseBook(book) {
  return `
    <div class="book-container">
      <div class="info-button" onclick="toggleView(this)">
        <p>i</p>
        <div class="hide-summary">${book.description}</div>
      </div>
      <a href="${book.link}" target="_blank">
        <h3 class="book-title">${book.title}</h3>
        <img class="book-image" src="${book.imgSrc}">
        <p class="book-author"><b>Author:</b> ${book.author}</p>
      </a>
    </div>
  `
}

function toggleView(el, bookDescription) {
  console.log(bookDescription)
  if (el.classList.contains('show-info')) {
    el.classList.remove('show-info')
    let bookSummaryTitle = el.childNodes[1]
    let bookSummaryBody = el.childNodes[3]
    bookSummaryTitle.innerHTML = 'i'
    bookSummaryTitle.style.marginTop = '3px'
    bookSummaryBody.classList.remove('show-summary')
    bookSummaryBody.classList.add('hide-summary')
  } else {
    el.classList.add('show-info')
    let bookSummaryTitle = el.childNodes[1]
    let bookSummaryBody = el.childNodes[3]
    bookSummaryTitle.innerHTML = 'Summary:'
    bookSummaryTitle.style.marginTop = '10px'
    bookSummaryBody.classList.remove('hide-summary')
    bookSummaryBody.classList.add('show-summary')
  }
}

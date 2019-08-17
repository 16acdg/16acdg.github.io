// Gets my reading list data from goodreads

const request = require('request');
const xml2js = require('xml2js');

const memberId = "95643754";
const devKey = "KxTsrOELKyLMI6HdAyaeQ";
const secret = "QMw0aGpNWxUUCIaiScisvNhjBU33lEpxFFv7zpwPk";

const goodreads = (callback) => {
  return new Promise(function(resolve, reject) {
    const url = "https://www.goodreads.com/review/list?v=2&key=" + devKey + "=&id=" + memberId;
    request(url, (error, body) => {
      if (error) {
        reject("Unable to access goodreads.com");
      } else {
        //var cleanString = body.toString().replace("\ufeff", "");
        xml2js.parseString(body.body, (err, result) => {
          if (err) {
            reject(err)
          } else {
            const data = result.GoodreadsResponse.reviews[0].review;
            var books = [];
            for (var i in data) {
              const book = data[i].book[0];
              books.push({
                title: book.title[0],
                description: book.description,
                author: book.authors[0].author[0].name[0],
                link: book.link,
                imgSrc: book.image_url,
                read: data[i].read_count[0] === '1' // true if read, false otherwise
              })
            } // end fo
            resolve(books)
          } // end if
        }) // end string parser
      } // end if
    }) // end request
  }) // end promise
} // end function

module.exports.goodreads = goodreads

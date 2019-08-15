const express = require('express');
// Gett an instance of Router in express as bookRouter
const bookRouter = express.Router();

// converting our bookRouter to a function so we can reuse nav
const router = (nav) => {
  const books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
  ]

  // Create a book route
  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView',
        {
          nav,
          title: 'Cool Library',
          books
        }
      );
    });

  // Create route for single book: /books/:{bookid}
  bookRouter.route('/:id')
    .get((req, res) => {
      // getting id from params in req using destructring
      // console.log(req)
      const { id } = req.params;
      res.render('bookView',
        {
          nav,
          title: 'Cool Library',
          book: books[id]
        }
      );
    })
  return bookRouter
}



module.exports = router;
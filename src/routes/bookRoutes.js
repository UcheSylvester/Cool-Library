const express = require('express');

// Get an instance of express to app
const app = express()

// Gett an instance of Router in express
const bookRouter = express.Router();

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
        res.render('books',
            {
                nav: [
                    { link: '/books', title: 'Books', },
                    { link: '/authors', title: 'Authors', },
                ],
                title: 'Cool Library',
                books
            }
        );
    });

// Create route for single book: /books/:{bookid}
bookRouter.route('/:id')
    .get((req, res) => {
        // getting id from param in req using destructring
        const { id } = req.param;
        res.render('book',
            {
                nav: [
                    { link: '/books', title: 'Books', },
                    { link: '/authors', title: 'Authors', },
                ],
                title: 'Cool Library',
                book: books[id]
            }
        );
    })

// Let express know of book route /books
app.use('/books', bookRouter)

module.exports = bookRouter;
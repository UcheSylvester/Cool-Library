const express = require('express');
const { mongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes')

const adminRouter = express.Router();

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


const router = nav => {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      // Get stuff from database
      (async function mongo() {
        let client;
        try {
          client = await mongoClient.connect(url);
          debug('connected correctly to server')

          const db = client.db(dbName);
          const response = await db.collection('books').insertMany(books);
          res.json(response)
        } catch (error) {
          debug(error.stack)
        }
      }())
    })
  return adminRouter;
}

module.exports = router;
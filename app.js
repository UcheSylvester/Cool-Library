const express = require('express'); // Getting express
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

// Get an instance of express
const app = express();

//  set PORT from nodemon in package.json
const PORT = process.env.PORT || 3000;

// configuring mssql
const config = {
  user: '...',
  password: '...',
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
  database: '...',

  options: {
      encrypt: true // Use this if you're on Windows Azure
  }
}

// use morgan to log out addition info
app.use(morgan('tiny'));

// use express to serve up static files
app.use(express.static(path.join(__dirname, '/public')));

// adding bootstrap CSS, JS, popper and JQuery from node modules
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist')));

// Set up views with express and set ejs as template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// defining nav to avoid repetition
const nav = [
  { link: '/books', title: 'Books', },
  { link: '/authors', title: 'Authors', },
]

// Get bookRoutes from routes
const bookRouter = require('./src/routes/bookRoutes')(nav);

// Let express know of book route /books
app.use('/books', bookRouter);

// sending a get request to /
app.get('/', (req, res) => {
  // rendering index files in src/views
  res.render(
    'index',
    {
      nav: [
        {
          link: '/books',
          title: 'Books',
        },
        {
          link: '/authors',
          title: 'Authors',
        },
      ],
      title: 'Cool Library',
    },
  );
});

// Listening on PORT (4000) defined earlier
app.listen(PORT, () => {
  debug(`listening at port ${chalk.green(PORT)}`);
});

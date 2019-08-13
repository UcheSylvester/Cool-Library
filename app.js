const express = require('express'); // Getting express
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Get an instance of express

const app = express();

//  Get the port from nodemon in package.json

const PORT = process.env.PORT || 3000;

// use morgan to log out addition info

app.use(morgan('tiny'));

// use express to serve up static files

app.use(express.static(path.join(__dirname, '/public')));

// adding bootstrap CSS, JS, popper and JQuery from node modules

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist')));

// Set up views with express and set pug as template engine

app.set('views', './src/views');
app.set('view engine', 'pug');

// sending a get request to /

app.get('/', (req, res) => {
  // sending files and join path using path .js
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));

  //rendering index files in src/views
  res.render('index', {
    title: 'MyLibrary',
    list: ['a', 'b']
  });
});

app.listen(PORT, () => {
  debug(`listening at port ${chalk.green(PORT)}`);
});

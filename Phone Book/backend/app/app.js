const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const cors = require('cors'); 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + db.threadId);
});

// Middleware to make the database accessible in the routers
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use CORS
app.use(cors());

// Routes setup
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Error handling
app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;

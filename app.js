const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();
const config = require('./config');
const cors = require('cors');


// route imports
const indexRouter = require('./routes/index');
const pingRouter = require('./routes/pingRoutes');
const userRouter = require('./routes/authRoutes');

// environment variable
const apiPref = process.env.API_PREF;

// express app
const app = express();

// connect to db
const db = require('./helpers/db')();

// jwt config setuo
app.set('api_secret_key', config.secret_key);

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app router
app.use('/', indexRouter);
app.use('/pings', pingRouter);
// middleware ...
app.use(`${apiPref}/users`, userRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
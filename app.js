var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var impact1 = require('./routes/impact1');
var impact2 = require('./routes/impact2');
var impact3 = require('./routes/impact3');
var impact4 = require('./routes/impact4');
var impact5 = require('./routes/impact5');
var highlight1 = require('./routes/highlight1');
var highlight2 = require('./routes/highlight2');
var highlight3 = require('./routes/highlight3');
var highlight4 = require('./routes/highlight4');
var highlight5 = require('./routes/highlight5');
var highlight6 = require('./routes/highlight6');
var highlight7 = require('./routes/highlight7');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', impact1);
app.use('/', impact2);
app.use('/', impact3);
app.use('/', impact4);
app.use('/', impact5);
app.use('/', highlight1);
app.use('/', highlight2);
app.use('/', highlight3);
app.use('/', highlight4);
app.use('/', highlight5);
app.use('/', highlight6);
app.use('/', highlight7);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

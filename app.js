var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var robots = require("express-robots");
var session = require('express-session');
var passport = require('passport');

var routes = require('./routes/index');
var auth = require('./routes/auth');
var user = require('./routes/user');
var mentors = require('./routes/mentors');
var template = require('./routes/template');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname+"/public")));
app.use("/bower_components", express.static(path.join(__dirname+"/bower_components")));

//TODO: Introduce the right kind of session store

var sess = {
    secret: 'mentormesecret',
    resave: false,
    cookie: {
        //maxAge: timeInMillis
    }
};

if (app.get('env') === 'production') {
    app.set('trust proxy', 1);
    sess.cookie.secure = true;
}

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

// DONT LET SEARCH ENGINES INDEX TILL LAUNCH:
app.use(robots({UserAgent: '*', Disallow: '/'}));

app.use('/', routes);
app.use('/auth', auth);

app.use('*', function(req, res, next) {
    if (req.isAuthenticated()){
        //console.log(req.session)
        return next();
    }
    else {
        res.redirect('/');
    }
});
app.use('/user', user);
app.use('/mentors', mentors);
app.use('/template', template);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
    // app.use(function(err, req, res, next) {
    //     res.status(err.status || 500);
    //     res.render('error', {
    //         message: err.message,
    //         error: err
    //     });
    // });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


module.exports = app;

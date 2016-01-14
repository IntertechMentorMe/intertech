var express = require('express');
var router = express.Router();
var db = require('../db.js');
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var url = process.env.host || "127.0.0.1:3000";

passport.use(new LinkedInStrategy({
    clientID: "776y20hol6ps97",
    clientSecret: "1Mqrz8nWqp5hU3y7",
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true,
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, done) {
    var user = {
      id: profile._json.id,
      first_name: fixedEncodeURIComponent(profile._json.firstName),
      last_name: fixedEncodeURIComponent(profile._json.lastName),
      headline: fixedEncodeURIComponent(profile._json.headline),
      summary: fixedEncodeURIComponent(profile._json.summary),
      email: fixedEncodeURIComponent(profile._json.emailAddress),
      photo: fixedEncodeURIComponent(profile._json.pictureUrls.values[0]),
    };

    if (req.session.isMentor)
        user['isMentor'] = req.session.isMentor;

    //TODO: Store the access token and refresh token
    return db.Users.getById(profile._json.id)
    .then(function(profile) {
        if (!profile) return db.Users.insert(user);
        else db.Users.update(user);
    })
    .then(function() {done(null, user)});
}));

function fixedEncodeURIComponent (str) {
    if (str) {
        return str.replace(/[']/g, function (c) {
            return '';
        });
    } else {
        return undefined;
    }
}

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    return db.Users.getById(user.id)
    .then(function(user) {done(null, user)})
});

router.get('/login',
    function(req, res){
        // The request will be redirected to LinkedIn for authentication, so this
        // function will not be called.
        url = req.host;
    }
    passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/user',
    failureRedirect: '/'
}));

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../db.js')

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
    clientID: "77xlox75336hph",
    clientSecret: "ZhS2IlMJ5YVS1OGk",
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true,
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, done) {
    var user = {
      id: profile._json.id,
      first_name: profile._json.firstName,
      last_name: profile._json.lastName,
      summary: profile._json.summary || profile._json.headline,
      email: profile._json.emailAddress,
      photo: profile._json.pictureUrl,
    };

    if (req.session.isMentor)
        user['isMentor'] = req.session.isMentor;

    //TODO: Store the access token and refresh token
    return db.Users.getById(profile._json.id)
    .then(profile => {
        if (!profile) return db.Users.insert(user);
        else db.Users.update(user);
    })
    .then(() => done(null, user))
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    return db.Users.getById(user.id)
    .then(user => done(null, user))
});

router.get('/login',
    passport.authenticate('linkedin'),
    function(req, res){
        // The request will be redirected to LinkedIn for authentication, so this
        // function will not be called.
    });

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/user',
    failureRedirect: '/'
}));

module.exports = router;
var express = require('express');
var router = express.Router();

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
    clientID: "77xlox75336hph",
    clientSecret: "ZhS2IlMJ5YVS1OGk",
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
}, function(req, accessToken, refreshToken, profile, done) {
    //TODO: Store the access token and refresh token
    console.log(req.path);
    return done(null, profile);
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, {id: id});
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
var db = require('../db.js');

var mountPoint = "/mentors";
var controller = function(req, res) {
  db.Users.listMentors()
  .then(mentors => res.render('mentors', {mentors}));
};

module.exports = function(router) {
  router.use(mountPoint, controller);
};

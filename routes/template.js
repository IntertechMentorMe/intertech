var mountPoint = "/template";
var controller = function(req, res) {
    res.render("template", {});
};

module.exports = function(router) {
  router.use(mountPoint, controller);
};

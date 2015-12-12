$$(".register-button a").addEvent("click", function() {
  $$(".TCoverlay").removeClass("hidden");
  var end = this.href.split("end=")[1];
  $$(".agree-button").set("href", "/"+end);
  return false;
});

$$(".disagree-button").addEvent("click", function() {
  $$(".TCoverlay").addClass("hidden");
  return false;
});

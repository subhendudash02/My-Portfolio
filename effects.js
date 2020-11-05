$(function () {
  var roles = ["VITian", "Tech Geek", "Programmer", "Rubik's Cube Solver", "Dog Lover"];
  var count = 0;
  var $typeSpan = $("#Home h4 span").typist({
    text: roles[count]
  });
  setInterval(() => {
    $typeSpan
      .typistRemove(roles[count++ % roles.length].length)
      .typistPause(2000)
      .typistAdd(roles[count % roles.length]);
  }, 5000);
  $(".navbar").hide();
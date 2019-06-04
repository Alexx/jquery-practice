$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });

  $("img").click(function() {
    alert("This is an image.");
  });

  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle();
    $("#initially-showing").fadeToggle();

  });

  $(".clickable-paragraph").click(function() {
    $(".clickable-paragraph").slideToggle();
  });

  $(".slide-p").mouseover(function() {
    $(".slide-p").slideToggle();
  });

});

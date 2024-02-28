$(document).ready(function () {
  $(".menuButton").click(function () {
    $(".menuPopup").addClass("active");
    $("body").addClass("body-overflow");
  });
  $(".closeButton").click(function () {
    $(".menuPopup").removeClass("active");
    $("body").removeClass("body-overflow");
  });
  $(".closeButton").click(function () {
    $(".popup").removeClass("active");
    $("body").removeClass("body-overflow");
  });
  $(".sendEmail").click(function () {
    $(".popup").addClass("active");
    $("body").addClass("body-overflow");
  });
});

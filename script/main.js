$(document).ready(function () {
  $(window).scroll(function () {
    30 <= window.pageYOffset
      ? $("header").addClass("active")
      : $("header").removeClass("active");
  });
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
  $(".dropdownHead").click(function () {
    $(".dropdownBody").toggleClass("active");
  });
  $(document).click(function (e) {
    e.stopPropagation();
    var container = $(".dropdown");
    if (container.has(e.target).length === 0) {
      $(".dropdownBody").removeClass("active");
    }
  });
});

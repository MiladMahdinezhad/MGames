$("#hamburger").click(function () {
  $(".sidebarmobile").animate(
    {
      left: 0,
    },
    500
  );
  $("html").css("overflow", "hidden");
});

$("#mobileclose").click(function () {
  $(".sidebarmobile").animate(
    {
      left: "-100rem",
    },
    500
  );
  $("html").css("overflow", "auto");
});

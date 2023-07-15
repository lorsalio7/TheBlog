window.addEventListener("load", function () {
  resizeToFit.init([
      ".page-title__text"
  ]);
});

window.addEventListener("resize", function () {
  resizeToFit.resize();
});

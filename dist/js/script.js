"use strict";

var themeButton = document.querySelector(".theme-toggle");
if (themeButton) {
  var switchTheme = function switchTheme() {
    isDarkTheme = localStorage.getItem("dark-theme");
    if (isDarkTheme !== "true") {
      setDarkTheme();
    } else if (isDarkTheme === "true") {
      setLightTheme();
    }
  };
  var setDarkTheme = function setDarkTheme() {
    documentHtml.classList.add("dark-theme");
    themeButton.classList.add("theme-toggle--active");
    localStorage.setItem("dark-theme", "true");
  };
  var setLightTheme = function setLightTheme() {
    documentHtml.classList.remove("dark-theme");
    themeButton.classList.remove("theme-toggle--active");
    localStorage.setItem("dark-theme", "false");
  };
  var documentHtml = document.querySelector("html");
  var isDarkTheme = localStorage.getItem("dark-theme");
  if (isDarkTheme === "true") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
  themeButton.addEventListener("click", switchTheme);
}
;
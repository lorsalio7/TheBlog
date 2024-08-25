"use strict";

function debounce(func, ms, now) {
  // объявляем функцию debounce

  var onLast; // переменная отвечает за вызов функции func после того, как прошло время ожидания ms от последнего события движения курсора

  return function () {
    // эта функция запускается при каждом событии движения курсора

    var context = this; // запоминаем передаваемую функцию func
    var args = arguments; // запоминаем параметры передаваемой функции func

    var onFirst = now && !onLast; // если хотим запустить функцию func при первом событии движения курсора и время ожидания не установлено

    clearTimeout(onLast); // сбрасываем время ожидания ms

    onLast = setTimeout(function () {
      // устанавливаем время ожидания

      onLast = null; // очищаем переменную onLast
      if (!now) func.apply(context, args); // если при первом событии движения курсора функция func не была вызвана, то вызываем ее когда время ожидания ms закончилось
    }, ms); // подставляем значение параметра ms

    if (onFirst) func.apply(context, args); // запускаем функцию func при первом событии движения курсора
  };
}

;
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
var burgerButton = document.querySelector(".burger-button");
if (burgerButton) {
  var openMenu = function openMenu() {
    pageHtml.classList.add("no-scroll");
    siteNavigation.classList.add("site-navigation--active");
  };
  var closeMenu = function closeMenu() {
    siteNavigation.classList.remove("site-navigation--active");
    setTimeout(function () {
      pageHtml.classList.remove("no-scroll");
    }, 300);
  };
  var fixVh = function fixVh() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  };
  var changeMenuView = function changeMenuView(width) {
    if (!width) {
      closeMenu();
    }
  };
  var siteNavigation = document.querySelector(".site-navigation");
  var closeNavigationButton = siteNavigation.querySelector(".close-button");
  var pageHtml = document.querySelector("html");
  var burgerMenuWidth = window.matchMedia("(max-width: 680px)");
  burgerButton.addEventListener("click", openMenu);
  closeNavigationButton.addEventListener("click", closeMenu);
  fixVh();
  window.addEventListener('resize', debounce(function () {
    fixVh();
  }, 300));
  document.addEventListener("keydown", function (e) {
    if (siteNavigation.classList.contains("site-navigation--active") && e.keyCode === 27) {
      closeMenu();
    }
  });
  burgerMenuWidth.onchange = function (e) {
    changeMenuView(e.matches);
  };
}
;
window.addEventListener("load", function () {
  resizeToFit.init([".page-title__text"]);
});
window.addEventListener("resize", debounce(function () {
  resizeToFit.resize();
}, 200));
;
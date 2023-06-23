const themeButton = document.querySelector(".theme-toggle");

if(themeButton) {
  const documentHtml = document.querySelector("html");
  let isDarkTheme = localStorage.getItem("dark-theme");

  if(isDarkTheme === "true") {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  themeButton.addEventListener("click", switchTheme);

  function switchTheme() {
    isDarkTheme = localStorage.getItem("dark-theme");
    if(isDarkTheme !== "true") {
      setDarkTheme();
    } else if(isDarkTheme === "true") {
      setLightTheme();
    }
  }

  function setDarkTheme() {
    documentHtml.classList.add("dark-theme");
    themeButton.classList.add("theme-toggle--active");
    localStorage.setItem("dark-theme", "true");
  }

  function setLightTheme() {
    documentHtml.classList.remove("dark-theme");
    themeButton.classList.remove("theme-toggle--active");
    localStorage.setItem("dark-theme", "false");
  }
}

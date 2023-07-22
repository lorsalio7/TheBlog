const burgerButton = document.querySelector(".burger-button");

if(burgerButton) {
  const siteNavigation = document.querySelector(".site-navigation");
  const closeNavigationButton = siteNavigation.querySelector(".close-button");
  const pageHtml = document.querySelector("html");
  let burgerMenuWidth = window.matchMedia("(max-width: 680px)");

  function openMenu() {
    pageHtml.classList.add("no-scroll");
    siteNavigation.classList.add("site-navigation--active");
  }

  function closeMenu() {
    siteNavigation.classList.remove("site-navigation--active");
    setTimeout(() => {
      pageHtml.classList.remove("no-scroll");
    }, 300);
  }

  burgerButton.addEventListener("click", openMenu);
  closeNavigationButton.addEventListener("click", closeMenu);

  function setHeightForMobile() {
    const currentHeight = window.innerHeight;
    document.body.style.height = `${currentHeight}px`;
  }

  setHeightForMobile();

  document.addEventListener("keydown", (e) => {
    if(siteNavigation.classList.contains("site-navigation--active") && e.keyCode === 27) {
      closeMenu();
    }
  })

  function changeMenuView(width) {
    if(!width) {
      closeMenu();
    }
  }

  burgerMenuWidth.onchange = (e) => {
    changeMenuView(e.matches);
  }
}

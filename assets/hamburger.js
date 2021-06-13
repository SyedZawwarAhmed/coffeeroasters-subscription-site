const menuContainer = document.getElementById("menu-container"),
  menu = document.getElementById("menu"),
  hamburger = document.getElementById("hamburger"),
  links = document.getElementsByClassName("hamburger-links"),
  nav = document.getElementById("nav");

let opened = false;

hamburger.addEventListener("click", () => {
  opened = opened === false ? true : false;

  if (opened) {
    hamburger.innerHTML =
      '<div id="hamburger" class="hamburger"><img src="assets/shared/mobile/icon-close.svg" alt=""></div>';
    nav.style.backgroundColor = "transparent";
    menu.classList.toggle("menu-expanded");
    menuContainer.style.zIndex = "2";

    for (let i = 0; i < 3; i++) {
      links[i].style.pointerEvents = "all";
      setTimeout(() => {
        links[i].classList.toggle("visible");
      }, 250);
    }
  } else {
    hamburger.innerHTML =
      '<div id="hamburger" class="hamburger"><img src="assets/shared/mobile/icon-hamburger.svg" alt=""></div>';
    for (let i = 0; i < 3; i++) {
      links[i].classList.toggle("visible");
      links[i].style.pointerEvents = "none";
    }
    setTimeout(() => {
      menu.classList.toggle("menu-expanded");
    }, 250);

    setTimeout(() => {
      menuContainer.style.zIndex = "-2";
      nav.style.backgroundColor = "#fff";
    }, 500);
  }
});

const menu = document.getElementById("menu"),
  hamburger = document.getElementById("hamburger"),
  para = document.getElementById("para"),
  links = document.getElementsByClassName("links");

let opened = false;

hamburger.addEventListener("click", () => {
  opened = opened === false ? true : false;

  if (opened) {
    para.classList.toggle("blurred");
    menu.classList.toggle("menu-expanded");

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        links[i].classList.toggle("visible");
      }, 250);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      links[i].classList.toggle("visible");
    }
    setTimeout(() => {
      para.classList.toggle("blurred");
      menu.classList.toggle("menu-expanded");
    }, 250);
  }
});

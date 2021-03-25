const toggler = document.getElementsByClassName("toggler"),
  orderCards = document.getElementsByClassName("order-cards"),
  preferences = document.getElementsByClassName("preferences"),
  beanTypes = document.getElementsByClassName("bean-types"),
  quantity = document.getElementsByClassName("quantity"),
  grindOption = document.getElementsByClassName("grind-option"),
  deliveries = document.getElementsByClassName("deliveries");

const capsule = document.getElementById("capsule"),
  grindOptions = document.getElementById("grind-options"),
  grindToggler = document.getElementById("grind-toggler");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", () => {
    toggler[i].classList.toggle("toggler-rotated");
    orderCards[i].classList.toggle("collapsed");
  });
}

for (let i = 0; i < preferences.length; i++) {
  preferences[i].addEventListener("click", () => {
    for (let j = 0; j < preferences.length; j++) {
      preferences[j].classList.remove("order-card-selected");
    }
    preferences[i].classList.add("order-card-selected");
    if (preferences[i] === capsule) {
      grindToggler.classList.add("toggler-rotated");
      grindToggler.style.pointerEvents = "none";
      grindOptions.classList.add("collapsed");
    } else {
      grindToggler.style.pointerEvents = "all";
    }
  });
}

for (let i = 0; i < beanTypes.length; i++) {
  beanTypes[i].addEventListener("click", () => {
    for (let j = 0; j < beanTypes.length; j++) {
      beanTypes[j].classList.remove("order-card-selected");
    }
    beanTypes[i].classList.add("order-card-selected");
  });
}

for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener("click", () => {
    for (let j = 0; j < quantity.length; j++) {
      quantity[j].classList.remove("order-card-selected");
    }
    quantity[i].classList.add("order-card-selected");
  });
}

for (let i = 0; i < grindOption.length; i++) {
  grindOption[i].addEventListener("click", () => {
    for (let j = 0; j < grindOption.length; j++) {
      grindOption[j].classList.remove("order-card-selected");
    }
    grindOption[i].classList.add("order-card-selected");
  });
}

for (let i = 0; i < deliveries.length; i++) {
  deliveries[i].addEventListener("click", () => {
    for (let j = 0; j < deliveries.length; j++) {
      deliveries[j].classList.remove("order-card-selected");
    }
    deliveries[i].classList.add("order-card-selected");
  });
}

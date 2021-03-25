const toggler = document.getElementsByClassName("toggler"),
  orderCards = document.getElementsByClassName("order-cards"),
  orderCard = document.getElementsByClassName("order-card");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", () => {
    toggler[i].classList.toggle("toggler-rotated");
    orderCards[i].classList.toggle("collapsed");
  });
}

for (let i = 0; i < orderCard.length; i++) {
  orderCard[i].addEventListener("click", () => {
    orderCard[i].classList.toggle("order-card-selected");
  });
}

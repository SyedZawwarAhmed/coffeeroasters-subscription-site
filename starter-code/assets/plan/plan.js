const toggler = document.getElementsByClassName("toggler"),
  orderCards = document.getElementsByClassName("order-cards");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", () => {
    toggler[i].classList.toggle("toggler-rotated");
    orderCards[i].classList.toggle("collapsed");
  });
}

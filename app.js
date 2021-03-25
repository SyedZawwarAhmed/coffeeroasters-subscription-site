//prevents text selection on double click
document.addEventListener(
  "mousedown",
  (e) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  },
  false
);

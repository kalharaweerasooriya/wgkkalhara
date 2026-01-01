const animatedItems = document.querySelectorAll(".fade");

animatedItems.forEach(item => {
  item.style.opacity = 0;
});

window.addEventListener("load", () => {
  animatedItems.forEach(item => {
    item.style.opacity = 1;
  });
});

const panels = document.querySelectorAll(".panel");

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
    clearInterval();
  });
});

let panel_item = 0;
setInterval(() => {
  removeActiveClass();
  panels[panel_item].classList.add("active");
  panel_item++;
  if (panel_item === panels.length) {
    panel_item = 0;
  }
}, 5000);

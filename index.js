const menuBtn = document.querySelector("i.fas");
const menu = document.querySelector(".nav-links-container");

menuBtn.addEventListener("click", () => {
  if (menu.style.visibility == "visible") {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
});

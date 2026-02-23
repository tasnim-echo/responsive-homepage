const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (pageYOffset > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

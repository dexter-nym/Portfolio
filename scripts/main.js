function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const circle = document.querySelector(".circle-hover");
circle.addEventListener("mousemove", function (e) {
  let x = e.pageX - circle.offsetLeft;
  let y = e.pageY - circle.offsetTop;

  circle.style.setProperty("--x", x + "px");
  circle.style.setProperty("--y", y + "px");
});

const cursor = document.querySelector(".cursor");

circle.addEventListener("mousemove", function (e) {
  let x = e.pageX - circle.offsetLeft;
  let y = e.pageY - circle.offsetTop;

  circle.style.setProperty("--xx", x + "px");
  circle.style.setProperty("--yy", y + "px");
});

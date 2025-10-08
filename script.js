const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav_links");
const links = document.querySelectorAll(".nav_link");
const menuMessage = document.getElementById("menu-message");

function updateMenuMessage() {
  if (linksContainer.classList.contains("active")) {
    menuMessage.innerHTML = `<a href="vehicles.html"> Vehicles</a><br> 
    <a href="carvalue.html">Car Value </a> <br>
    <a href="financing.html"> Car Review</a><br>
    <a href="about.html"> About</a><br>
    <a href="contact.html"> Contact</a>`;
  } else {
    menuMessage.innerHTML = "";
  }
}

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
  updateMenuMessage();
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 650px)").matches) {
    closeMenu();
    updateMenuMessage();
  }
});
if (window.matchMedia("(max-width: 650px)").matches) {
  closeMenu();
  updateMenuMessage();
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
      updateMenuMessage();
    });
  });
}

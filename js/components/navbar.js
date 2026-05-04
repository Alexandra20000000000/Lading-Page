export function initNavbar() {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const nav = document.querySelector(".header__nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("header__nav--open");
      menuToggle.classList.toggle("header__menu-toggle--active");
    });
  }

  // Smooth scroll
  const navLinks = document.querySelectorAll(".header__nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#") && href !== "#") {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          
          // Ocultar menú en móvil tras hacer clic
          if(nav.classList.contains("header__nav--open")) {
             nav.classList.remove("header__nav--open");
             menuToggle.classList.remove("header__menu-toggle--active");
          }
        }
      }
    });
  });
}

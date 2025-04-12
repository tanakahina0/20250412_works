document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menu-btn");
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      menuCheckbox.checked = false;
    });
  });
});
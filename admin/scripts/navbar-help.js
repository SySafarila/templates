const navbarRightHelp = document.getElementById("navbar-right-help");
const navbarRightHelpCenter = document.getElementById(
  "navbar-right-help-center"
);

navbarRightHelp.addEventListener("mouseenter", () => {
  if (navbarRightHelpCenter.classList.contains("hidden")) {
    navbarRightHelpCenter.classList.remove("hidden");
  }
});

navbarRightHelp.addEventListener("mouseleave", () => {
  if (!navbarRightHelpCenter.classList.contains("hidden")) {
    navbarRightHelpCenter.classList.add("hidden");
  }
});

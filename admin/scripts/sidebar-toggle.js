const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

sidebarToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.replace("hidden", "flex");
    main.classList.remove("overflow-y-auto");
  } else {
    sidebar.classList.replace("flex", "hidden");
    main.classList.add("overflow-y-auto");
  }
});

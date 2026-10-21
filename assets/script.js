const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeIcon = document.querySelector("[data-theme-icon]");
const menuButton = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const themes = ["auto", "light", "dark"];

function setTheme(theme) {
  const resolvedTheme = themes.includes(theme) ? theme : "auto";
  root.dataset.colorMode = resolvedTheme;
  localStorage.setItem("portfolio-theme", resolvedTheme);

  if (themeLabel) {
    themeLabel.textContent =
      resolvedTheme === "auto"
        ? "Theme: system"
        : `Theme: ${resolvedTheme}`;
  }

  if (themeIcon) {
    themeIcon.textContent =
      resolvedTheme === "light" ? "☀" : resolvedTheme === "dark" ? "☾" : "◐";
  }
}

setTheme(localStorage.getItem("portfolio-theme") || "auto");

themeButton?.addEventListener("click", () => {
  const currentIndex = themes.indexOf(root.dataset.colorMode || "auto");
  setTheme(themes[(currentIndex + 1) % themes.length]);
});

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav?.classList.toggle("is-open", !isOpen);
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});


import { disableScroll } from "./disable-scroll.js";
import { enableScroll } from "./enable-scroll.js";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");

  burger?.addEventListener("click", (e) => {
    burger?.classList.toggle("_active");
    menu?.classList.toggle("_active");

    if (menu?.classList.contains("_active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Close menu");
      disableScroll();
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Open menu");
      enableScroll();
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Open menu");
    burger.classList.remove("_active");
    menu.classList.remove("_active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "Open menu");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("_active");
      menu.classList.remove("_active");
      enableScroll();
    });
  });
})();

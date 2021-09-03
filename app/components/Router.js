import { Home } from "./Home.js";
import { About } from "./About.js";
import { Gallery } from "./Gallery.js";
import { Contact } from "./Contact.js";

export function Router() {
  const d = document,
    $mainSection = d.getElementById("main-section"),
    $menu = d.getElementById("menu");

  let { hash } = location;

  if (!hash) hash = "#/";

  for (let child of $menu.children) {
    if (child.firstElementChild.hash == hash) {
      child.firstElementChild.classList.add("selected");
    } else {
      child.firstElementChild.classList.remove("selected");
    }
  }

  $menu.classList.remove("display");
  $mainSection.innerHTML = "";

  if (!hash || hash == "#/") {
    document.title = "Home | Your Restaurant";
    $mainSection.appendChild(Home());
  } else if (hash == "#/about") {
    document.title = "Nosotros | Your Restaurant";
    $mainSection.appendChild(About());
  } else if (hash == "#/gallery") {
    document.title = "Galeria | Your Restaurant";
    $mainSection.appendChild(Gallery());
  } else if (hash == "#/contact") {
    document.title = "Contacto | Your Restaurant";
    $mainSection.appendChild(Contact());
  }
}

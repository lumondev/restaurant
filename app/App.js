import { Header } from "./components/part-components/Header.js";
import { Nav } from "./components/part-components/Nav.js";
import { Section } from "./components/part-components/Section.js";
import { Footer } from "./components/part-components/Footer.js";

import { Router } from "./components/Router.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Nav());
  $root.appendChild(Section());
  Router();
  $root.appendChild(Footer());
}

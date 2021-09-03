const d = document;

export function Nav() {
  const $nav = d.createElement("nav");
  $nav.classList.add("nav");

  $nav.innerHTML = `
        <div class="nav__container container">
            <span class="nav__btn" id="btn-menu">
                <i class="fas fa-bars"></i>
            </span>

            <ul class="nav__menu" id="menu">
                <li>
                    <a href="#/" class="link selected">Inicio</a>
                </li>
                <li>
                    <a href="#/about" class="link">Nosotros</a>
                </li>
                <li>
                    <a href="#/gallery" class="link">Galeria</a>
                </li>
                <li>
                    <a href="#/contact" class="link">Contacto</a>
                </li>
            </ul>

            <div class="nav__social">
                <a href=""><i class="fab fa-facebook-square"></i></a>
                <a href=""><i class="fab fa-twitter-square"></i></a>
                <a href=""><i class="fas fa-envelope"></i></a>
            </div>
        </div>
  `;

  document.addEventListener("click", (e) => {
    const $menuBtn = document.getElementById("btn-menu"),
      $menu = document.getElementById("menu");

    if (e.target !== $menuBtn) return;

    $menu.classList.toggle("display");
  });
  return $nav;
}

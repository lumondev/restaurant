const d = document;

export function Header() {
  const $header = document.createElement("header");
  $header.innerHTML = `
  <div class="header__container container">
        <div class="header__title column--50">
            <h1>Your Restaurant</h1>
        </div>
    
        <div class="header__contact column--50">
            <p class="header__contact-phone">
              <span class="icon-phone"><i class="fas fa-phone"></i>999-999-999</span>
            </p>
        
            <p class="header__contact-adress">
              <span class="icon-adress"><i class="fas fa-map-marker-alt"></i>Mainer 176 - Monte Grande - Buenos Aires</span>
            </p>
        </div>
  </div>
    `;

  return $header;
}

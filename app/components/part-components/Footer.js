const d = document;

export function Footer() {
  const $footer = d.createElement("footer");
  $footer.classList.add("footer");

  $footer.innerHTML = `
        <div class="footer__container container">
            <div class="column column--50">
                    <h2 class="footer__title">¿Por qué visitarnos?</h2>
                    <p class="footer__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eius rem modi libero quidem! Error quis impedit magni iste tenetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eius rem modi libero quidem! Error quis impedit magni iste tenetur!</p>          
            </div>
            <div class="column column--50">
                <h2 class="footer__title">Contáctenos</h2>
                <p class="footer__text">Mainer 176 - Monte Grande - Buenos Aires</p>
                <p class="footer__text">Telefono: 999-999-999</p>
                <p class="footer__text">consultas@yourrestaurant.com</p>
            </div>
        </div>
       <p class="footer__copyright">Copyright Your Restaurant <span>Portfolio Lucas Molina</span></p>        
    `;

  return $footer;
}

{
  /* <footer class="main-footer">
        <div class="container container--flex">
            <div class="column column--33">
                    <h2 class="column__title">¿Por qué visitarnos?</h2>
                    <p class="column__txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eius rem modi libero quidem! Error quis impedit magni iste tenetur!</p>          
            </div>
            <div class="column column--33">
                <h2 class="column__title">Contáctenos</h2>
                <p class="column__txt">Mainer 176 - Monte Grande - Buenos Aires</p>
                <p class="column__txt">Telefono: 999-999-999</p>
                <p class="column__txt">consultas@yourrestaurant.com</p>
            </div>
            <div class="column column--33">
                <h2 class="column__title">Siguenos en nuestras redes</h2>
                <p class="column__txt"><a href=""><i class="fab fa-facebook-square"></i>Facebook</a></p>
                <p class="column__txt"><a href=""><i class="fab fa-twitter-square"></i>Siguenos en Twitter</a></p>
                <p class="column__txt"><a href=""><i class="fab fa-youtube"></i>YouTube</a></p>
            </div>
            <p class="copy">Copyright coso</p>
        </div>
    </footer> */
}

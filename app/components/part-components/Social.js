const d = document;

export function Social() {
  const $div = d.createElement("div");
  $div.classList.add("social", "column--50");

  $div.innerHTML = `
        <h3 class="social__title">Información de contacto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique eum assumenda neque animi, modi temporibus, id iure laboriosam pariatur veniam libero cum quaerat, laborum eveniet tempora maiores voluptatum? Animi.</p>
        <p class="social__text"><i class="fas fa-phone"></i> Télefono: 999-999-999</p>
        <p class="social__text"><i class="fas fa-map-marker-alt"></i> Mainer 176, Monte Grande, Buenos Aires</p>
        <p class="social__text"><i class="fas fa-envelope"></i> consultas@yourrestaurant.com</p>
        <div class="social__bar">
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-twitter-square"></i></a>
            <a href=""><i class="fas fa-envelope"></i></a>
        </div>
    `;

  return $div;
}

{
  /* <div class="contact-information column column--50">
                    <h3 class="column__title">Información de contacto</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique eum assumenda neque animi, modi temporibus, id iure laboriosam pariatur veniam libero cum quaerat, laborum eveniet tempora maiores voluptatum? Animi.</p>
                    <p class="column__txt"><i class="fas fa-phone"></i> Télefono: 999-999-999</p>
                    <p class="column__txt"><i class="fas fa-map-marker-alt"></i> Mainer 176, Monte Grande, Buenos Aires</p>
                    <p class="column__txt"><i class="fas fa-envelope"></i> consultas@yourrestaurant.com</p>
                
                    <div class="social-icon">
                        <a href=""><i class="fab fa-facebook-square"></i></a>
                        <a href=""><i class="fab fa-twitter-square"></i></a>
                        <a href=""><i class="fas fa-envelope"></i></a>
                    </div>
                </div> */
}

import { sendEmail } from "../helpers/send-email.js";

const d = document;

export function Form() {
  const $div = d.createElement("div");
  $div.classList.add("form", "column--50");

  $div.innerHTML = `
    <form
    class="form__main" 
    id="form">
        <label class="form__label">Nombre </label>
        <input
            type="text"
            name="name"
            title="El nombre sólo puede contener letras y espacios en blanco"
            pattern=^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$
            class="form__input"
            required
        />   

        <label class="form__label">Correo </label>
        <input
            type="text"
            name="email"
            title="Debe ingresar un mail válido, que incluya un @"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            class="form__input"
            required
        />

        <label class="form__label">Mensaje </label>
        <textarea
            name="comments"
            cols="50"
            rows="5"
            data-pattern="^.{1,255}$"
            title="Tu comentario no debe exceder los 255 caracteres"
            class="form__textarea"
            required
        ></textarea>
                    
        <input type="submit" name="" class="form__submit" id="form-submit" value="Enviar" />

        <div class="form__loader none">
           <img src="app/assets/images/loader.svg" alt="Cargando...">
        </div>

        <div class="form__response none">
           <p></p>
        </div>
    <form>
    `;

  setTimeout(() => {
    validateForm();
  }, 10);

  return $div;
}

function validateForm() {
  const $form = d.querySelector(".form__main"),
    $inputs = d.querySelectorAll(".form__input");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form__input")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);

        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(".form__loader"),
      $response = d.querySelector(".form__response");

    $loader.classList.remove("none");

    setTimeout(() => {
      sendEmail($form.name.value, $form.email.value, $form.comments.value);
      $loader.classList.add("none");
      $response.firstChild.textContent = `Gracias ${$inputs[0].value} por dejar tus comentarios!`;
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}

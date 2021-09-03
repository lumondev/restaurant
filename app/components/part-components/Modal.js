const d = document;

export function Modal(galleryArray) {
  const $div = d.createElement("div");
  $div.classList.add("modal");
  $div.id = "modal";
  $div.innerHTML = `
    <div class="modal__content">
        <img src="" alt="" class="modal__img" id="modal__img">
    </div>
    <div class="modal__btn" id="modal__btn">X</div>
    <div class="modal__arrow next" id="modal__next">>></div>
    <div class="modal__arrow prev" id="modal__prev"><<</div>
    `;

  let actualIndex = 0;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".gallery__img")) {
      const divisor = e.target.src.indexOf("galeria");
      const fileName = e.target.src.slice(divisor);

      chargeImage(
        galleryArray.find((el, index) => {
          if (el.includes(fileName)) {
            actualIndex = index;
            return el;
          }
        })
      );


      $div.classList.add("modal--open");
      d.body.classList.add("avoid--scrolling");
    }

    if (e.target.matches(".next")) {
      actualIndex = actualIndex === galleryArray.length - 1 ? 0 : actualIndex + 1;
      chargeImage(galleryArray[actualIndex]);
    }

    if (e.target.matches(".prev")) {
      actualIndex = actualIndex === 0 ? galleryArray.length - 1 : actualIndex - 1;
      chargeImage(galleryArray[actualIndex]);
    }

    if (e.target.matches(".modal__btn")) {
      $div.classList.remove("modal--open");
      d.body.classList.remove("avoid--scrolling");
    }
  });

  return $div;
}

const chargeImage = (src) => {
  const $modal = d.querySelector(".modal__img");
  $modal.src = src;
};

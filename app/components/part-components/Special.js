const d = document;

export function Special(obj) {
  const $div = d.createElement("div");
  $div.classList.add("special");

  const $h2 = d.createElement("h2");
  $h2.textContent = "Especiales del día";

  $div.appendChild($h2);

  const $specialContainer = d.createElement("div");
  $specialContainer.classList.add(
    "special__container",
    "container",
    "container-flex"
  );

  for (let key in obj) {
    const $innerDiv = d.createElement("div");
    $innerDiv.classList.add("column", "column--50--25");
    $innerDiv.innerHTML = `
      <img src=${obj[key].imgURL} alt="" class="special__img">
      <h3 class="special__title">Especial del día ${obj[key].id}</h3>
      <p class="special__price">$${obj[key].price}</p>
    `;

    $specialContainer.appendChild($innerDiv);
  }

  $div.appendChild($specialContainer);

  return $div;
}

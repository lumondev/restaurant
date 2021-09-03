const d = document;

export function Team(obj) {
  const $div = d.createElement("div");
  $div.classList.add("team");

  const $itemList = d.createElement("ul");
  $itemList.classList.add("team__container", "container");

  for (let key in obj) {
    const $item = d.createElement("li");
    $item.classList.add("item", "column--50", "column--33");
    $item.innerHTML = `
      <h3 class="item__name">${obj[key].name}</h3>
      <img src=${obj[key].imgURL} alt="" class="item__img">
      <p class="item__text">${obj[key].desc}</p>
    `;

    $itemList.appendChild($item);
  }
  $div.appendChild($itemList);
  return $div;
}

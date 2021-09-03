const d = document;

export function Description({ imgURL, title, subtitle }) {
  const $div = d.createElement("div");

  $div.classList.add("description", "container");

  $div.innerHTML = `
            <div class="description__column column--50">
                <img src=${imgURL} alt="food photo">
            </div>
            <div class="description__column column--50">
                <h3 class="title">${title}</h3>
                <p class="text">${subtitle}</p>
            </div>
        `;
  return $div;
}

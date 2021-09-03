const d = document;

export function Banner({ imgURL, title }) {
  const $banner = d.createElement("div"),
    $img = d.createElement("img"),
    $div = d.createElement("div");

  $banner.classList.add("banner");

  $img.src = imgURL;
  $img.alt = "banner image";
  $img.classList.add("banner__img");

  $div.textContent = title;
  $div.classList.add("banner__content");

  $banner.append($img, $div);

  return $banner;
}

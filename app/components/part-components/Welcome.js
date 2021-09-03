const d = document;

export function Welcome({ title, subtitle }) {
  const $div = d.createElement("div"),
    $h2 = d.createElement("h2"),
    $p = d.createElement("p");

  $h2.textContent = title;
  $p.textContent = subtitle;

  $div.classList.add("welcome", "container");
  $div.append($h2, $p);

  return $div;
}

import { Modal } from "./Modal.js";

const d = document;

export function ShowGallery(gallery) {
  const $div = d.createElement("div"),
    galleryArray = [];
  $div.classList.add("gallery", "container");

  for (let i = 1; i < 10; i++) {
    const $img = d.createElement("img"),
      imageSource = gallery.concat(`${i}.jpg`);
    $img.src = imageSource;
    $img.classList.add("gallery__img", "column--50--25");
    $div.appendChild($img);
    galleryArray.push(imageSource);
  }
  
  $div.appendChild(Modal(galleryArray));

  return $div;
}

// var img = new Image();
// img.onload = function() { alert("Height: " + this.height); }
// img.src = "http://path/to/image.jpg";

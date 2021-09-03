import { Banner } from "./part-components/Banner.js";
import { Welcome } from "./part-components/Welcome.js";
import { ShowGallery } from "./part-components/ShowGallery.js";
// import { Modal } from "./part-components/Modal.js";

const d = document;
export function Gallery() {
  const $fragment = d.createDocumentFragment();

  const props = {
    banner: {
      imgURL: "app/assets/images/banner-gallery.jpg",
      title: "Nuestras mejores preparaciones",
    },
    welcome: {
      title: "Nuestra Galeria",
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    gallery: "app/assets/images/gallery/galeria",
  };

  $fragment.appendChild(Banner(props.banner));
  $fragment.appendChild(Welcome(props.welcome));
  $fragment.appendChild(ShowGallery(props.gallery));

  return $fragment;
}

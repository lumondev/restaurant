import { Banner } from "./part-components/Banner.js";
import { Form } from "./part-components/Form.js";
// import { Social } from "./part-components/Social.js";

const d = document;
export function Contact() {
  const $fragment = d.createDocumentFragment();

  const props = {
    banner: {
      imgURL: "app/assets/images/banner-contact.jpg",
      title: "¿Dudas o sugerencias? Contacténos",
    },
    welcome: {},
  };

  $fragment.appendChild(Banner(props.banner));
  // $fragment.appendChild(Social());
  $fragment.appendChild(Form());

  return $fragment;
}

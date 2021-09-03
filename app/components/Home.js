import { Banner } from "./part-components/Banner.js";
import { Welcome } from "./part-components/Welcome.js";
import { Special } from "./part-components/Special.js";

const d = document;

export function Home() {
  const $fragment = d.createDocumentFragment();

  const props = {
    banner: {
      imgURL: "app/assets/images/banner.jpg",
      title: "La mejor y exquisita comida está aquí",
    },
    welcome: {
      title: "Bienvenido a su restaurante",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est commodi tempore provident ullam expedita aspernatur ab repudiandae facilis quod? Enim a, fuga praesentium pariatur ab libero nulla totam consectetur!",
    },
    special: {
      firstSpecial: {
        id: 1,
        imgURL: "app/assets/images/plate1.jpg",
        price: 99,
      },
      secondSpecial: {
        id: 2,
        imgURL: "app/assets/images/plate2.jpg",
        price: 99,
      },
      thirdSpecial: {
        id: 3,
        imgURL: "app/assets/images/plate5.jpg",
        price: 99,
      },
      fourthSpecial: {
        id: 4,
        imgURL: "app/assets/images/plate4.jpg",
        price: 99,
      },
    },
  };

  $fragment.appendChild(Banner(props.banner));
  $fragment.appendChild(Welcome(props.welcome));
  $fragment.appendChild(Special(props.special));
  return $fragment;
}

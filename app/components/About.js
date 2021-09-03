import { Banner } from "./part-components/Banner.js";
import { Welcome } from "./part-components/Welcome.js";
import { Team } from "./part-components/Team.js";

const d = document;

export function About() {
  const $fragment = d.createDocumentFragment();

  const props = {
    banner: {
      imgURL: "app/assets/images/banner-about.jpg",
      title: "Lo mejor de nosotros a tu servicio",
    },
    welcome: {
      title: "Sobre Nosotros",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est commodi tempore provident ullam expedita aspernatur ab repudiandae facilis quod? Enim a, fuga praesentium pariatur ab libero nulla totam consectetur!",
    },
    team: {
      julia: {
        name: "Julia",
        imgURL: "app/assets/images/chef1.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est commodi tempore provident ullam expedita aspernatur ab repudiandae facilis quod? Enim a, fuga praesentium pariatur ab libero nulla totam consectetur!",
      },
      pablo: {
        name: "Pablo",
        imgURL: "app/assets/images/chef2.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est commodi tempore provident ullam expedita aspernatur ab repudiandae facilis quod? Enim a, fuga praesentium pariatur ab libero nulla totam consectetur!",
      },
      ricardo: {
        name: "Ricardo",
        imgURL: "app/assets/images/chef3.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus est commodi tempore provident ullam expedita aspernatur ab repudiandae facilis quod? Enim a, fuga praesentium pariatur ab libero nulla totam consectetur!",
      },
    },
  };

  $fragment.appendChild(Banner(props.banner));
  $fragment.appendChild(Welcome(props.welcome));
  $fragment.appendChild(Team(props.team));

  return $fragment;
}

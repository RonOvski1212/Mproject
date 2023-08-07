import tabs from "./modules/tabs";
import timer from "./modules/timer";
import slider from "./modules/slider";
import modal from "./modules/modal";
import forms from "./modules/forms";
import cards from "./modules/cards";
import calc from "./modules/calc";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000
  );

  tabs();
  timer();
  slider();
  modal("[data-modal]", ".modal", modalTimerId);
  forms(modalTimerId);
  cards();
  calc();

  // // // // npx json-server db.json // // // //
  // fetch("http://localhost:3000/menu")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
});

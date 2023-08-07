window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    timer = require("./modules/timer"),
    slider = require("./modules/slider"),
    modal = require("./modules/modal"),
    forms = require("./modules/forms"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc");

  tabs();
  timer();
  slider();
  modal();
  forms();
  cards();
  calc();

  // // // // npx json-server db.json // // // //
  // fetch("http://localhost:3000/menu")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
});

// bag forms.js:67 Uncaught (in promise) ReferenceError: openModal is not defined (its need fixed!)

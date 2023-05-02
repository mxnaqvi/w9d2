import  Game  from "../ttt_node/game.js";
import  View  from "./ttt-view.js";


document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const el = document.querySelector(".ttt");
  new View(game, el);
  const v = new View(game, el);
  window.v = v
  v.setupBoard();
});
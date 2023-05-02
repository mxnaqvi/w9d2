
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }
  
  setupBoard() {
   const parent = el.document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++){
      let child = el.document.createElement("li");
      parent.append(child);
      }
    }
  }
  
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;
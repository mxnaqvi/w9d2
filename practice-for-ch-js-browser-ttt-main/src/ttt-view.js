
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard()
  }
  
  setupBoard() {
   const parent = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++){
      let child = document.createElement("li");
      child.dataset.pos = [i, j]
      parent.append(child);
      }
    }
    this.el.append(parent)

    
  }
  
  
  handleClick(e) {
    
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;
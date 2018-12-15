function Board({ initialState }) {
  // Default is 3 X 3 Board
  const state = initialState
    ? initialState
    : [["", "", ""], ["", "", ""], ["", "", ""]];

  let lastPlayer;

  this.getCurrentState = () => state;

  this.allocate = ({ x, y, symbol }) => {
    if (this.isComplete()) throw new Error("AllSpacesOccupied");

    if (state[x][y] !== "")
      throw new Error("AlreadyOccupied");

    if (lastPlayer && lastPlayer === symbol) {
      throw new Error("TwoMovesNotAllowed");
    } else {
      lastPlayer = symbol;
      state[x][y] = symbol;
    }
  };

  this.reset = () => {
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[i].length; j++) {
        state[i][j] = "";
      }
    }
  };

  hasWon = ({ symbol }) => {
    state[0][0] == state[0][1] && state[0][1] == state[0][2];
    state[1][0] == state[1][1] && state[1][1] == state[1][2];
    state[2][0] == state[2][1] && state[2][1] == state[2][2];

    state[0][0] == state[1][0] && state[1][0] == state[2][0];
    state[0][1] == state[1][1] && state[1][1] == state[2][1];
    state[0][2] == state[1][2] && state[1][2] == state[2][2];

    state[0][0] == state[1][1] && state[1][1] == state[2][2];
    state[0][2] == state[1][1] && state[1][1] == state[2][0];
  };

  this.isComplete = () => {
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[i].length; j++) {
        if (state[i][j] === "") return false;
      }
    }
    return true;
  };
}

const state = createGrid();
let html = "<table>";
for (let i = 0; i < state.length; i++) {
  html += "<tr>";
  for (let j = 0; j < state[i].length; j++) {
    html += "<td></td>";
  }
  html += "</tr>";
}
html += "</table>";
console.log("html", html);
// alert(document.getElementById("board").innerHTML);
// document.getElementById("board").innerHTML = html;

function createGrid() {
  let board = new Board({});
  return board.getCurrentState();
}

module.exports = Board
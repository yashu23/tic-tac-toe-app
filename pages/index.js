let lastPlayer = 'X';

function Board({ initialState }) {
  // Default is 3 X 3 Board
  const state = initialState
    ? initialState
    : [["", "", ""], ["", "", ""], ["", "", ""]];

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

attachEventHanders = ({ state, handler }) => {
  for(let i = 0; i < 9; i++) {
    document.getElementById(`cell${i}`).addEventListener('click', () => {
      document.getElementById(`cell${i}`).textContent = 'X';
    });
  }
}

drawGrid = ({ id, state }) => {
  
  let html = "<table class=\"boardTbl\">";
  
  let counter = 0;
  
  for (let i = 0; i < state.length; i++) {
    html += "<tr>";
    for (let j = 0; j < state[i].length; j++) {
      html += `<td id="cell${counter}">${state[i][j]}</td>`;
      counter++;
    }
    html += "</tr>";
  }
  html += "</table>";
  console.log("html", html);  
  document.getElementById(id).innerHTML = html;
}

let board = new Board({});
const state = board.getCurrentState();
drawGrid({ id: "board", state});
attachEventHanders({ state: board.getCurrentState(), handler: () => board.al });
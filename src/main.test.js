const { expect } = require("chai");

describe("test cases", () => {
  it("Should be able to successful allocate an unoccupied space", () => {
    const initialState = [["", "", ""], ["", "", ""], ["", "", ""]];
    const board = new Board({ initialState });
    const expectedResponse = [["X", "", ""], ["", "", ""], ["", "", ""]];
    const move = {
      x: 0,
      y: 0,
      symbol: "X"
    };
    board.allocate(move);
    expect(board.getCurrentState()).to.deep.eq(expectedResponse);
  });

  it("Should throw error if space is already occupied", () => {
    const initialState = [["", "", ""], ["", "", ""], ["", "", ""]];
    const board = new Board({ initialState });
    const move = {
      x: 0,
      y: 0,
      symbol: "O"
    };
    board.allocate(move);
    expect(() => board.allocate(move)).to.Throw("AlreadyOccupied");
  });

  it("Should throw error if same player plays twice", () => {
    const initialState = [["", "", ""], ["", "", ""], ["", "", ""]];
    const board = new Board({ initialState });
    const move = {
      x: 0,
      y: 0,
      symbol: "O"
    };
    board.allocate(move);

    move.x = 1;
    expect(() => board.allocate(move)).to.Throw("TwoMovesNotAllowed");
  });

  it("Should throw error if all spaces are already occuppied", () => {
    const initialState = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
    const board = new Board({ initialState });
    const move = {
      x: 0,
      y: 0,
      symbol: "O"
    };
    expect(() => board.allocate(move)).to.Throw("AllSpacesOccupied");
  });
});

// Behaviour
/*
1) User should be able to select empty block
2) User should not be able to select occupied block
3) If user combination wins, then winning message should be displayed
4) If no userful moves available then game is tie, tie message should be displayed
5) User should be able to reset the game
6) Same user should not be allowed to make two moves
*/

function Board({ initialState }) {
  
  // Default is 3 X 3 Board
  const state = initialState ? initialState : [["", "", ""], ["", "", ""], ["", "", ""]];
  
  let lastPlayer;

  let isDone;
  
  this.getCurrentState = () => state;
  
  this.allocate = ({ x, y, symbol }) => {
    
    if(this.isComplete()) throw new Error("AllSpacesOccupied");

    if (state[x][y] === "X" || state[x][y] === "O") throw new Error("AlreadyOccupied");
    
    if (lastPlayer && lastPlayer === symbol) {
      throw new Error("TwoMovesNotAllowed") 
    } else {
      lastPlayer = symbol;
      state[x][y] = symbol;
    }
  };

  hasWon = ({ symbol }) => {
    state[0][0] == state[0][1] && state[0][1] == state[0][2]
    state[1][0] == state[1][1] && state[1][1] == state[1][2]
    state[2][0] == state[2][1] && state[2][1] == state[2][2]

    state[0][0] == state[1][0] && state[1][0] == state[2][0]
    state[0][1] == state[1][1] && state[1][1] == state[2][1]
    state[0][2] == state[1][2] && state[1][2] == state[2][2]
    

    state[0][0] == state[1][1] && state[1][1] == state[2][2]
    state[0][2] == state[1][1] && state[1][1] == state[2][0]
  }

  this.isComplete = () => {
    for(let i=0; i< state.length; i++) {
      for(let j=0; j < state[i].length; j++) {
        if (state[i][j] === "") return false;
      }
    }
    return true;
  }

}

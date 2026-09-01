let test = (function ticTacToe() {
  // Have all code for the game be in here

  const GameData = {
    gameBoard: {
      row0: ['', '', ''],
      row1: ['', '', ''],
      row2: ['', '',''],
    },
    player1: {
      symbol: "X",
      winner: false
    },
    player2: {
      symbol: "O",
      winner: false
    },
    currentPlayer: {
      symbol:''
    }
  }


  function play(player, row, col) {
    //claim the grid with the players symbol
    if (GameData.gameBoard[`row${row}`][col] === '') {
      GameData.gameBoard[`row${row}`][col] = GameData[player].symbol;
       console.log(GameData.gameBoard);
    } else {
      return;
    }
    //change current player
  }


  function setCurrentPlayer() {
    //set the currentPlayer
  }

  function checkWin() {
    //check all the squares
    // check each row
    // check each column
    //
  }

  return {
    play,
    setCurrentPlayer,
    checkWin,
    GameData
  }

})()

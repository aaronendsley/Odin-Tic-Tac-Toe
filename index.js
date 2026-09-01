let test = (function ticTacToe() {
  // Have all code for the game be in here

  const GameData = {
    gameBoard: [
      '', '', '',
      '', '', '',
      '', '', ''
    ],
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


  function play(player, cell) {
    //claim the grid with the players symbol
    if (GameData.gameBoard[cell] === '') {
      GameData.gameBoard[cell] = GameData[player].symbol;
       console.log(GameData.gameBoard);
    } else {
      return;
    }
    //change current player
  }


  function setCurrentPlayer() {
    //set the currentPlayer
  }

  function checkWin(player) {
    const winningLines = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
     ];


  }

  return {
    play,
    setCurrentPlayer,
    checkWin,
    GameData
  }

})()

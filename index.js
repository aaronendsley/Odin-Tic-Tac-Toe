(function ticTacToe() {
  // Have all code for the game be in here
  const GameData = {
    gameBoard: [
      '', '', '',
      '', '', '',
      '', '', ''
    ],
    player1: {
      name: '',
      score:0,
      symbol: "X",
      winner: false
    },
    player2: {
      name: '',
      score:0,
      symbol: "O",
      winner: false
    },
    currentPlayer: 'player1',
    message: '',
  }


  function play(cell) {
    //claim the grid with the players symbol
    if (GameData.gameBoard[cell] === '') {
      GameData.gameBoard[cell] = GameData[GameData.currentPlayer].symbol;
      checkWin(GameData.currentPlayer);
      setCurrentPlayer()
    } else {
      return;
    }

    //change current player
  }

  function setCurrentPlayer() {
    if (GameData.currentPlayer === 'player1') {
      GameData.currentPlayer = 'player2';
    } else {
      GameData.currentPlayer = "player1";
    }
  }

  function checkWin(player) {
    const PlayerSymbol = GameData[player].symbol;
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

    if(winningLines.some(function (pattern) {
      return pattern.every(function (position) {
        return GameData.gameBoard[position] === PlayerSymbol;
      })
    })) {
      console.log(`${player} has won the game`);
    } else {
      if (GameData.gameBoard.every((position) => position !== '')) {
        console.log('its a tie');
      }
    }
  }

  // Ui functions
  function setUpInterface() {
    createListeners();
    createPlayerStats();
  }

  function createListeners() {
    const AllSquares = Array.from(document.querySelectorAll('.square'));
    AllSquares.forEach(function (square) {
      square.addEventListener('click', function () {
        square.textContent = GameData[GameData.currentPlayer].symbol;
        play(square.attributes[1].nodeValue);
      })
    })
  }

  function createPlayerStats() {

  }
  setUpInterface();
})()

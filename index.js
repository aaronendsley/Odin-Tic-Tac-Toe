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

  }


  function play(cell) {
    //claim the grid with the players symbol
    if (GameData.gameBoard[cell] === '') {
      GameData.gameBoard[cell] = GameData[GameData.currentPlayer].symbol;
      checkWin(GameData.currentPlayer);
      if (!GameData[GameData.currentPlayer].winner) {
        setCurrentPlayer();
        changeMessage(`${GameData[GameData.currentPlayer].name} it's your turn!`)
      }

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
      changeMessage(`${GameData[player].name} Has Won!`)
      GameData[player].winner = true;
      GameData[player].score = GameData[player].score + 1
      updateUIScore(player);
    } else {
      if (GameData.gameBoard.every((position) => position !== '')) {
        changeMessage('Its a tie');
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
    const getUserNames = document.getElementById('userForm');
    getUserNames.addEventListener('submit', function (event) {
      event.preventDefault();
      GameData.player1.name = getUserNames[0].value;
      GameData.player2.name = getUserNames[1].value;
      document.getElementById('get_user_names').style.display = "none"
      getUserNames[0].value = "";
      getUserNames[1].value = "";
      changeMessage(`${GameData.player1.name} it is your turn!`);
      updateUIScore('player1');
      updateUIScore('player2');
      document.getElementById('player1_name').textContent = GameData.player1.name;
      document.getElementById('player2_name').textContent = GameData.player2.name;
    })
  }

  function changeMessage(message) {
    document.getElementById('message').textContent = message;
  }

  function updateUIScore(player) {
    document.getElementById(`${player}_score`).textContent = GameData[player].score
  }

  setUpInterface();
})()

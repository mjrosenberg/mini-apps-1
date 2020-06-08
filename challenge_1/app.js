const squares = document.getElementById('tictactoe');
const button = document.getElementById('reset');
const submitButton = document.getElementById('submit');
var gameState = {};
gameState.XMove = true;
gameState.squaresFilled = 0;
gameState.gameOver = false;
gameState.winner = '';
gameState.count = {X: 0, O: 0};
gameState.playerX = 'X';
gameState.playerO = 'O';
var modifyText = (event) =>{
  if (event.target.innerText === '' && gameState.gameOver === false){
    if (gameState.XMove === true) {
      event.target.innerText = 'X';
    } else{
      event.target.innerText = 'O';
    }
    gameState.XMove = !gameState.XMove;
    gameState.squaresFilled++;
  }
}
var checkRow = (row, letter) =>{
  for (var i = 1; i<4; i++){
    var id = row + String(i);
    if (document.getElementById(id).innerText !== letter){
      return false;
    }
  }
  return true;
}
var checkCol = (col, letter) =>{
  for (var i = 1; i<4; i++){
    var id = String(i) + col;
    if (document.getElementById(id).innerText !== letter){
      return false;
    }
  }
  return true;
}
var checkNegDiagonal = (letter) =>{
  for (var i = 1; i<4; i++){
    var id = String(i) + String(i);
    if (document.getElementById(id).innerText !== letter){
      return false;
    }
  }
  return true;
}
var checkPosDiagonal = (letter) =>{
  for (var i = 1; i<4; i++){
    var id = String(i) + String(4-i);
    if (document.getElementById(id).innerText !== letter){
      return false;
    }
  }
  return true;
}
var checkBoard = (event)=>{
  if (gameState.gameOver === false){
    var id = event.target.id;
    var letter = event.target.innerText;
    var row = id[0];
    var col = id[1];
    var player;
    if (letter === "X"){
      player = gameState.playerX;
    }
    if (letter === "O"){
      player = gameState.playerO;
    }
    if (checkRow(row, letter) === true){
      //display winning message and return out of the function
      document.getElementById('ending').innerText = player + ' wins!';
      gameState.gameOver= true;
      gameState.winner = letter;
      gameState.count[letter]++;
      return;
    }
    if (checkCol(col, letter) === true){
      //display winning message and return out of the function
      document.getElementById('ending').innerText = player + ' wins!';
      gameState.gameOver= true;
      gameState.winner = letter;
      gameState.count[letter]++;
      return;
    }
    if (id === '11'|| id === '22'|| id === '33'){
      if (checkNegDiagonal(letter) === true){
        //display winning message and return out of the function
        document.getElementById('ending').innerText = player + ' wins!';
        gameState.gameOver= true;
        gameState.winner = letter;
        gameState.count[letter]++;
        return;
      }
    }
    if (id === '13'|| id === '22'|| id === '31'){
      if (checkPosDiagonal(letter) === true){
        //display winning message and return out of the function
        document.getElementById('ending').innerText = player + ' wins!';
        gameState.gameOver= true;
        gameState.winner = player;
        gameState.count[letter]++;
        return;
      }
    }
    if (gameState.squaresFilled === 9){
      //display the tie message and return out of the function
      document.getElementById('ending').innerText = 'It\'s a tie! The board is full';
      gameState.gameOver= true;
      return;
    }
    if (letter === "X"){
      document.getElementById('ending').innerText = gameState.playerO + '\'s turn';
    }
    if (letter === "O"){
      document.getElementById('ending').innerText = gameState.playerX + '\'s turn';
    }
  }
}
var reset = (event) => {
  for (var row = 1; row<4; row++){
    for (var col =1 ; col<4; col++){
      var id = String(row) + String(col);
      document.getElementById(id).innerText = '';
    }
  }
  if (gameState.winner === 'X'){
    gameState.count.x++
    document.getElementById('xtally').innerText = gameState.playerX + ': ' + gameState.count.X;
    gameState.XMove = true;
    document.getElementById('ending').innerText = gameState.playerX + '\'s turn';
    document.getElementById('winner').innerText =  'Reigning Champion: ' + gameState.playerX;
  } else if (gameState.winner === 'O'){
    gameState.count.o++
    document.getElementById('otally').innerText =  gameState.playerO + ': ' + gameState.count.O;
    gameState.XMove = false;
    document.getElementById('ending').innerText = gameState.playerO + '\'s turn';
    document.getElementById('winner').innerText =  'Reigning Champion: ' + gameState.playerO;
  } else {
    document.getElementById('xtally').innerText = gameState.playerX + ': ' + gameState.count.X;
    document.getElementById('otally').innerText =  gameState.playerO + ': ' + gameState.count.O;
    document.getElementById('ending').innerText = gameState.playerX + '\'s turn';
  }
  gameState.squaresFilled = 0;
  gameState.gameOver = false;
}
var doSubmit = (event) =>{
  var xNameInput = document.getElementById('xname').value;
  var oNameInput = document.getElementById('oname').value;
  if(xNameInput !== null){
    gameState.playerX = xNameInput;
  }
  if(oNameInput !== null){
    gameState.playerO = oNameInput;
  }
  reset(event);
}

squares.addEventListener('click', (event)=>{
  modifyText(event);
  checkBoard(event);
}, false);
button.addEventListener("click", reset, false);
submitButton.addEventListener("click", doSubmit, false);


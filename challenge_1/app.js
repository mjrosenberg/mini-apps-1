const squares = document.getElementById('tictactoe');
const button = document.getElementById('reset');
const submitButton = document.getElementById('submit');
var XMove = true;
var squaresFilled = 0;
var gameOver = false;
var winner = '';
var count = {X: 0, O: 0};
var playerX = 'X';
var playerO = 'O';
//if (winner === 'X')
var modifyText = (event) =>{
  //console.dir(event.target.innerText);
  if (event.target.innerText === '' && gameOver === false){
    if (XMove === true) {
      event.target.innerText = 'X';
    } else{
      event.target.innerText = 'O';
    }
    XMove = !XMove;
    squaresFilled++;
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
  //after each click we should check the board to see if a win has occurred or it is full
  if (gameOver === false){
    //console.log(playerX, playerO);
    var id = event.target.id;
    var letter = event.target.innerText;
    var row = id[0];
    var col = id[1];
    var player;
    if (letter === "X"){
      player = playerX;
    }
    if (letter === "O"){
      player = playerO;
    }
    if (checkRow(row, letter) === true){
      //display winning message and return out of the function
      document.getElementById('ending').innerText = player + ' wins!';
      gameOver= true;
      winner = letter;
      count[letter]++;
      return;
    }
    if (checkCol(col, letter) === true){
      //display winning message and return out of the function
      document.getElementById('ending').innerText = player + ' wins!';
      gameOver= true;
      winner = letter;
      count[letter]++;
      return;
    }
    if (id === '11'|| id === '22'|| id === '33'){
      if (checkNegDiagonal(letter) === true){
        //display winning message and return out of the function
        document.getElementById('ending').innerText = player + ' wins!';
        gameOver= true;
        winner = letter;
        count[letter]++;
        return;
      }
    }
    if (id === '13'|| id === '22'|| id === '31'){
      if (checkPosDiagonal(letter) === true){
        //display winning message and return out of the function
        document.getElementById('ending').innerText = player + ' wins!';
        gameOver= true;
        winner = player;
        count[letter]++;
        return;
      }
    }
    if (squaresFilled === 9){
      //display the tie message and return out of the function
      document.getElementById('ending').innerText = 'It\'s a tie! The board is full';
      gameOver= true;
      return;
    }
    //document.getElementById('ending').innerText = player+'\'s turn';
    if (letter === "X"){
      document.getElementById('ending').innerText = playerO + '\'s turn';
    }
    if (letter === "O"){
      document.getElementById('ending').innerText = playerX + '\'s turn';
    }
  }
}
var reset = (event) => {
  //squares.innerText = '';
  for (var row = 1; row<4; row++){
    for (var col =1 ; col<4; col++){
      var id = String(row) + String(col);
      document.getElementById(id).innerText = '';
    }
  }
  //add a tally for x and o
  if (winner === 'X'){
    count.x++
    document.getElementById('xtally').innerText = playerX + ': ' + count.X;
    XMove = true;
    document.getElementById('ending').innerText = playerX + '\'s turn';
    document.getElementById('winner').innerText =  'Reigning Champion: ' + playerX;
  } else if (winner === 'O'){
    count.o++
    document.getElementById('otally').innerText =  playerO + ': ' + count.O;
    XMove = false;
    document.getElementById('ending').innerText = playerO + '\'s turn';
    document.getElementById('winner').innerText =  'Reigning Champion: ' + playerO;
  } else {
    document.getElementById('xtally').innerText = playerX + ': ' + count.X;
    document.getElementById('otally').innerText =  playerO + ': ' + count.O;
    document.getElementById('ending').innerText = playerX + '\'s turn';
  }
  squaresFilled = 0;
  gameOver = false;
}
var doSubmit = (event) =>{
  var xNameInput = document.getElementById('xname').value;
  var oNameInput = document.getElementById('oname').value;
  if(xNameInput !== null){
    playerX = xNameInput;
  }
  if(oNameInput !== null){
    playerO = oNameInput;
  }
  reset(event);
}

squares.addEventListener('click', (event)=>{
  modifyText(event);
  checkBoard(event);
}, false);
button.addEventListener("click", reset, false);
submitButton.addEventListener("click", doSubmit, false);


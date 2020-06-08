const squares = document.getElementById('tictactoe');
const button = document.getElementById('reset');
var XMove = true;
var squaresFilled = 0;
var gameOver = false;
var winner = '';
var count = {X: 0, O: 0};
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
    var id = event.target.id;
    var letter = event.target.innerText;
    var row = id[0];
    var col = id[1];
    if (checkRow(row, letter) === true){
      //display winning message and return out of the function
      document.getElementById('ending').innerText = letter + ' wins!';
      gameOver= true;
      winner = letter;
      count[letter]++;
      return;
    }
    if (checkCol(col, letter) === true){
      //display winning message and return out of the function
      document.getElementById('ending').innerText = letter + ' wins!';
      gameOver= true;
      winner = letter;
      count[letter]++;
      return;
    }
    if (id === '11'|| id === '22'|| id === '33'){
      if (checkNegDiagonal(letter) === true){
        //display winning message and return out of the function
        document.getElementById('ending').innerText = letter + ' wins!';
        gameOver= true;
        winner = letter;
        count[letter]++;
        return;
      }
    }
    if (id === '13'|| id === '22'|| id === '31'){
      if (checkPosDiagonal(letter) === true){
        //display winning message and return out of the function
        document.getElementById('ending').innerText = letter + ' wins!';
        gameOver= true;
        winner = letter;
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
    if (letter === "X"){
      document.getElementById('ending').innerText = 'O\'s turn';
    }
    if (letter === "O"){
      document.getElementById('ending').innerText = 'X\'s turn';
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
  document.getElementById('ending').innerText = winner + '\'s turn';
  document.getElementById('winner').innerText =  'Reigning Champion: ' + winner;
  //add a tally for x and o
  if (winner === 'X'){
    count.x++
    document.getElementById('xtally').innerText = 'X: ' + count.X;
    XMove = true;
  } else{
    count.o++
    document.getElementById('otally').innerText =  'O: ' + count.O;
    XMove = false;
  }
  squaresFilled = 0;
  gameOver = false;
}
// squares.addEventListener("click", modifyText, false);
// squares.addEventListener("click", checkBoard, false);
squares.addEventListener('click', (event)=>{
  modifyText(event);
  checkBoard(event);
}, false);
button.addEventListener("click", reset, false);

const squares = document.getElementById('tictactoe');
var XMove = true;
var squaresFilled = 0;
console.log(squares);
var modifyText = (event) =>{
  //console.dir(event.target.innerText);
  if (event.target.innerText === ''){
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
  var id = event.target.id;
  var letter = event.target.innerText;
  var row = id[0];
  var col = id[1];
  if (checkRow(row, letter) === true){
    //display winning message and return out of the function
    console.log(letter,'wins');
    return;
  }
  if (checkCol(col, letter) === true){
    //display winning message and return out of the function
    console.log(letter,'wins');
    return;
  }
  if (id === '11'|| id === '22'|| id === '33'){
    if (checkNegDiagonal(letter) === true){
      //display winning message and return out of the function
      console.log(letter,'wins');
      return;
    }
  }
  if (id === '13'|| id === '22'|| id === '31'){
    if (checkPosDiagonal(letter) === true){
      //display winning message and return out of the function
      console.log(letter,'wins');
      return;
    }
  }
  if (squaresFilled === 9){
    //display the tie message and return out of the function
    console.log('the board is full and there is no winner');
    return;
  }
}
squares.addEventListener("click", modifyText, false);
squares.addEventListener("click", checkBoard, false);

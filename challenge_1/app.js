const squares = document.getElementById('tictactoe');
var moveCount = 0;
console.log(squares);
modifyText = (event) =>{
  //console.dir(event.target.innerText);
  if (event.target.innerText === ''){
    if (moveCount%2 === 0) {
      event.target.innerText = 'X';
    } else{
      event.target.innerText = 'O';
    }
    moveCount++;
  }
}
squares.addEventListener("click", modifyText, false);

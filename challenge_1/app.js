const squares = document.getElementById('tictactoe');
console.log(squares);
modifyText = (event) =>{
  //console.dir(event.target.innerText);
  event.target.innerText = 'X';
}
squares.addEventListener("click", modifyText, false);

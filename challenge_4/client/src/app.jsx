import React from 'react';
// import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //filled: {
        //represents the furthest up row that has a tile in it in each column
      1: 9,
      2: 9,
      3: 9,
      4: 9,
      5: 9,
      6: 9,
      7: 9,
      //},
      turn: 'X',
      over: false,
      message: '',
      filled: 0
    }
    this.display = this.display.bind(this);
    this.checkRules = this.checkRules.bind(this);
  }
  componentDidMount(){

  }
  display(row, col){
    if (this.state.over === true){
      return;
    }
    var id = `${row}${col}`;
    var nextRow = this.state[col] - 1;
    var nextId = `${nextRow}${col}`;
    document.getElementById(nextId).innerText = this.state.turn;
    this.checkRules(nextRow,col);
    if (this.state.turn === 'O'){
      this.setState({
        [col]: nextRow,
        //needs to be a reference to the variable stored in col, not actually the string col
        turn: 'X',
        filled: this.state.filled + 1
      })
    } else{
      this.setState({
        [col]: nextRow,
        turn: 'O',
        filled: this.state.filled + 1
      })
    }
  }
  checkRow(row){
    var curr = '';
    var prev = ''
    var inARow = 1;
    for (var col = 1; col < 8; col++){
      var id = `${row}${col}`;
      curr = document.getElementById(id).innerText;
      //console.log(id, 'curr is', curr,'prev is', prev);
      if (curr === prev && curr !== ''){
        inARow++;
      } else{
        prev = curr;
        inARow = 1;
      }
      if (inARow === 4){
        return true;
      }
    }
    return false;
  }
  checkCol(col){
    var curr = '';
    var prev = ''
    var inARow = 1;
    for (var row = 8; row > 0; row--){
      var id = `${row}${col}`;
      curr = document.getElementById(id).innerText;
      if (curr === prev && curr !== ''){
        inARow++;
      } else{
        prev = curr;
        inARow = 1;
      }
      if (inARow === 4){
        return true;
      }
    }
    return false;
  }
  checkPosDiagonal(row, col){
    var startRow = row;
    var startCol = col;
    var curr = '';
    var prev = ''
    var inARow = 1;
    while (startRow > 1 && startCol < 7){
      startRow--;
      startCol++;
    }
    console.log('pos diagonal starting from:', startRow, startCol);
    while(startRow < 9 && startCol > 0) {
      var id = `${startRow}${startCol}`;
      curr = document.getElementById(id).innerText;
      console.log(id, 'curr is', curr,'prev is', prev);
      if (curr === prev && curr !== ''){
        inARow++;
      } else{
        prev = curr;
        inARow = 1;
      }
      if (inARow === 4){
        return true;
      }
      startRow ++;
      startCol --;
    }
    return false;
  }
  checkNegDiagonal(row, col){
    var startRow = row;
    var startCol = col;
    var curr = '';
    var prev = ''
    var inARow = 1;
    while (startRow > 1 && startCol > 1){
      startRow--;
      startCol--;
    }
    console.log('neg diagonal starting from:', startRow, startCol);
    while(startRow < 9 && startCol < 8) {
      var id = `${startRow}${startCol}`;
      curr = document.getElementById(id).innerText;
      console.log(id, 'curr is', curr,'prev is', prev);
      if (curr === prev && curr !== ''){
        inARow++;
      } else{
        prev = curr;
        inARow = 1;
      }
      if (inARow === 4){
        return true;
      }
      startRow ++;
      startCol ++;
    }
    return false;
  }
  //need to check the rules of the game after each click to see if there has been a winner
  checkRules(row, col){
    if (this.state.over === true){
      return;
    }
    if (this.checkRow(row) === true){
      this.setState({
        over: true,
        message: `${this.state.turn} wins`
      });
      return;
    }
    if (this.checkCol(col) === true){
      this.setState({
        over: true,
        message: `${this.state.turn} wins`
      });
      return;
    }
    if (this.checkPosDiagonal(row, col) === true){
      this.setState({
        over: true,
        message: `${this.state.turn} wins`
      });
      return;
    }
    if (this.checkNegDiagonal(row, col) === true){
      this.setState({
        over: true,
        message: `${this.state.turn} wins`
      });
      return;
    }
    if (this.state.filled === 56){
      this.setState({
        over: true,
        message: 'The bord is full! It\'s a draw.'
      });
      return;
    }
  }
  render(){
    return(
      <div>
        <div>{this.state.turn +'\'s turn'}</div>
        <div>
          <Board display={this.display} checkRules={this.checkRules}/>
        </div>
        <div onClick={()=>{this.checkRules(8, 1);}}>Check Rules</div>
        <div>{this.state.message}</div>
      </div>
    );
  }
}
//display this onto the DOM

export default App;

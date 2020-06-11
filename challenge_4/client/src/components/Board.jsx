import React from 'react';
import Square from './Square.jsx';
function Board(props){
  //should get passed some state props to pass down to the squares
  var rows = [1,2,3,4,5,6,7,8];
  var cols = [1,2,3,4,5,6,7];
  return(
    <table>
      {rows.map(row => {
        cols.map(col =>{
          <Square row={row} col={col} display={''} />
        })
      })}
    </table>
  );
}
export default Board;
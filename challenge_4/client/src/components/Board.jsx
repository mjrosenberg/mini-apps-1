import React from 'react';
import Square from './Square.jsx';
// const divStyle = {
//   border: '1px',
//   color
// }
function Board(props){
  //should get passed some state props to pass down to the squares
  return(
    <div className='board'>
      <Square row={1} col={1} display={props.display} />
      <Square row={1} col={2} display={props.display} />
      <Square row={1} col={3} display={props.display} />
      <Square row={1} col={4} display={props.display} />
      <Square row={1} col={5} display={props.display} />
      <Square row={1} col={6} display={props.display} />
      <Square row={1} col={7} display={props.display} />
      <Square row={2} col={1} display={props.display} />
      <Square row={2} col={2} display={props.display} />
      <Square row={2} col={3} display={props.display} />
      <Square row={2} col={4} display={props.display} />
      <Square row={2} col={5} display={props.display} />
      <Square row={2} col={6} display={props.display} />
      <Square row={2} col={7} display={props.display} />
      <Square row={3} col={1} display={props.display} />
      <Square row={3} col={2} display={props.display} />
      <Square row={3} col={3} display={props.display} />
      <Square row={3} col={4} display={props.display} />
      <Square row={3} col={5} display={props.display} />
      <Square row={3} col={6} display={props.display} />
      <Square row={3} col={7} display={props.display} />
      <Square row={4} col={1} display={props.display} />
      <Square row={4} col={2} display={props.display} />
      <Square row={4} col={3} display={props.display} />
      <Square row={4} col={4} display={props.display} />
      <Square row={4} col={5} display={props.display} />
      <Square row={4} col={6} display={props.display} />
      <Square row={4} col={7} display={props.display} />
      <Square row={5} col={1} display={props.display} />
      <Square row={5} col={2} display={props.display} />
      <Square row={5} col={3} display={props.display} />
      <Square row={5} col={4} display={props.display} />
      <Square row={5} col={5} display={props.display} />
      <Square row={5} col={6} display={props.display} />
      <Square row={5} col={7} display={props.display} />
      <Square row={6} col={1} display={props.display} />
      <Square row={6} col={2} display={props.display} />
      <Square row={6} col={3} display={props.display} />
      <Square row={6} col={4} display={props.display} />
      <Square row={6} col={5} display={props.display} />
      <Square row={6} col={6} display={props.display} />
      <Square row={6} col={7} display={props.display} />
      <Square row={7} col={1} display={props.display} />
      <Square row={7} col={2} display={props.display} />
      <Square row={7} col={3} display={props.display} />
      <Square row={7} col={4} display={props.display} />
      <Square row={7} col={5} display={props.display} />
      <Square row={7} col={6} display={props.display} />
      <Square row={7} col={7} display={props.display} />
      <Square row={8} col={1} display={props.display} />
      <Square row={8} col={2} display={props.display} />
      <Square row={8} col={3} display={props.display} />
      <Square row={8} col={4} display={props.display} />
      <Square row={8} col={5} display={props.display} />
      <Square row={8} col={6} display={props.display} />
      <Square row={8} col={7} display={props.display} />
    </div>
  );
}
export default Board;
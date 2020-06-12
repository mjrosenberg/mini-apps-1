import React from 'react';

function Square(props){
  //should take in a positional prop about it's column and row, so it can use that to display or not display the right piece
  //props = {row:1, col:2, display: display(id)} the display prop should return "" if nothing or "X" or "O" if one of those pieces should be displayed
  var piece = '';
  //console.log('create square with props', props)
  return(<div className='square' id={`${props.row}${props.col}`} onClick={()=>{
    props.display(props.row, props.col);
  }}></div>);
}

export default Square;
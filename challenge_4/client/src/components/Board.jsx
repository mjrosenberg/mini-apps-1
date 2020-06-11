import Square from './Square';
function Board(props){
  //should get passed some state props to pass down to the squares
  return(
    <table>
      {for (row = 1; row < 7; row++){
        <tr>
        {for (col=1; col<8; col++){
          <Square row={row} col={col} display={''} />
        }}
        </tr>
      }}
    </table>
  );
}
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filled: {
        //represents the furthest up row that has a tile in it in each column
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0
      },
      turn: 'X'
    }
  }
  componentDidMount(){

  }
  display(id){

  }
  render(){
    return(
      <div>
        <Board display={()=>{display(id)}} />
      </div>
    );
  }
}
//display this onto the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export default App;

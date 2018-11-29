import React, { Component } from 'react';
import ModalWelcome from './components/ModalWelcome';
// import Card from './components/Card';
// import But from './components/But';
import Column from './components/Column';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnList: [1,2,3,4]
    }
    
  }

  addColumn = () => {
    let list = this.state.columnList.concat();
    list.push(this.state.columnList.length + 1);
    this.setState( (state) => ({
      columnList: list
    }) ) ;
  }
  
  render() {
    return  (
      <div>
        <ModalWelcome />
        <div className="container">
          <div className="row">
            
            {this.state.columnList.map(item => (<Column key={item} columnId={item}/>))}
            <button className="btn btn-primary btn-sm" type="submit" onClick={this.addColumn}>
              +column
            </button>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;

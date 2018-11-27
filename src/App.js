import React, { Component } from 'react';
// import Modal from './components/Modal';
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
    this.addColumn = this.addColumn.bind(this);
  }

  addColumn() {
    let list = this.state.columnList.concat();
    list.push(this.state.columnList.length + 1);
    this.setState( (state) => ({
      columnList: list
    }) ) ;
  }
  
  render() {
    return  (
      <div className="container">
        <div className="row">
          <button className="btn btn-primary btn-sm" type="submit" onClick={this.addColumn}>
            +column
          </button>
          {this.state.columnList.map(item => (<Column key={item} />))}
          
        </div>
      </div>
    )
  }
}

export default App;

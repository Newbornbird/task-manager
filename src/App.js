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
  }
 

  render() {
    return  (
      <div className="container">
        <div className="row">
          <button className="btn btn-primary btn-sm" type="submit">
            +column
          </button>
          {this.state.columnList.map(item => (<Column id={item} />))}
          {/* <Column columnAmount={this.state.columnList}/> */}
        </div>
      </div>
    )
  }
}

export default App;

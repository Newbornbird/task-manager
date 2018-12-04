import React, { Component } from 'react';
// import ModalWelcome from './components/ModalWelcome';
// import Card from './components/Card';
// import But from './components/But';
import Column from './components/Column';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnList: [ 0, 1, 2, 3 ],
      columnNames: [ 'TODO', 'In progress', 'Testing', 'DONE']
    }
    
  }

  addColumn = () => {
    let columnList = this.state.columnList.concat();
    let columnNames = this.state.columnNames.concat();
    columnList.push(this.state.columnList.length);
    columnNames.push('Введите название');
    this.setState( (state) => ({
      columnList,
      columnNames
    }) ) ;

    
  }

  saveStateToLocalStorage = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    // window.addEventListener(
    //   "beforeunload",
    //   this.saveStateToLocalStorage()
    // );
  }

  componentDidUpdate() {
    this.saveStateToLocalStorage();
  }

  clear = () => {
    localStorage.clear();
  }
  
  render() {
    return  (
      <div>
        <div className="container">
          <div className="row">
            {this.state.columnList.map(item => (
              <Column 
                key={item}
                columnId = {item} 
                columnName={this.state.columnNames[item]}
              />))
            }
            <button className="btn btn-primary btn-sm" type="submit" onClick={this.addColumn}>
              +column
            </button>
            <button className="btn btn-primary btn-sm" type="submit" onClick={this.clear}>
              clear
            </button>         
          </div>
        </div>
      </div>
    )
  }
}

export default App;

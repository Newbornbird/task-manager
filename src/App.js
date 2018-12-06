import React, { Component } from 'react';
import ModalWelcome from './components/ModalWelcome.jsx';
import Column from './components/Column.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnList: [ 0, 1, 2, 3 ],
      columnNames: [ 'TODO', 'In progress', 'Testing', 'DONE'],
      author: '',
      modalWelcomeIsActive: true
    }
    
  }

  enterAuthorName = (event) => {
    this.setState({ author: event.target.value });
  }

  unActivateModalWelcome = () => {
    if(!this.state.author) {
      return;
    }
    this.setState( { modalWelcomeIsActive: false } );
   

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
        <ModalWelcome 
          modalWelcomeIsActive={this.state.modalWelcomeIsActive}
          enterAuthorName={this.enterAuthorName}
          unActivateModalWelcome={this.unActivateModalWelcome}
        />
        <div className="container">
          <div className="row">
            {this.state.columnList.map(item => (
              <Column 
                key={item}
                columnId = {item} 
                columnName={this.state.columnNames[item]}
                author={this.state.author}
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

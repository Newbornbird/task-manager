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
    columnNames.push(' ');
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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newItem: "",
//       list: []
//     };
//   }

//   componentDidMount() {
//     this.hydrateStateWithLocalStorage();

//     // add event listener to save state to localStorage
//     // when user leaves/refreshes the page
//     window.addEventListener(
//       "beforeunload",
//       this.saveStateToLocalStorage.bind(this)
//     );
//   }

//   componentWillUnmount() {
//     window.removeEventListener(
//       "beforeunload",
//       this.saveStateToLocalStorage.bind(this)
//     );

//     // saves if component has a chance to unmount
//     this.saveStateToLocalStorage();
//   }

//   hydrateStateWithLocalStorage() {
//     // for all items in state
//     for (let key in this.state) {
//       // if the key exists in localStorage
//       if (localStorage.hasOwnProperty(key)) {
//         // get the key's value from localStorage
//         let value = localStorage.getItem(key);

//         // parse the localStorage string and setState
//         try {
//           value = JSON.parse(value);
//           this.setState({ [key]: value });
//         } catch (e) {
//           // handle empty string
//           this.setState({ [key]: value });
//         }
//       }
//     }
//   }

//   saveStateToLocalStorage() {
//     // for every item in React state
//     for (let key in this.state) {
//       // save to localStorage
//       localStorage.setItem(key, JSON.stringify(this.state[key]));
//     }
//   }

//   updateInput(key, value) {
//     // update react state
//     this.setState({ [key]: value });
//   }

//   addItem() {
//     // create a new item with unique id
//     const newItem = {
//       id: 1 + Math.random(),
//       value: this.state.newItem.slice()
//     };

//     // copy current list of items
//     const list = [...this.state.list];

//     // add the new item to the list
//     list.push(newItem);

//     // update state with new list, reset the new item input
//     this.setState({
//       list,
//       newItem: ""
//     });
//   }

//   deleteItem(id) {
//     // copy current list of items
//     const list = [...this.state.list];
//     // filter out the item being deleted
//     const updatedList = list.filter(item => item.id !== id);

//     this.setState({ list: updatedList });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React LocalStorage Tutorial</h1>
//         </header>
//         <div
//           style={{
//             padding: 50,
//             textAlign: "left",
//             maxWidth: 500,
//             margin: "auto"
//           }}
//         >
//           Add an item to the list
//           <br />
//           <input
//             type="text"
//             placeholder="Type item here"
//             value={this.state.newItem}
//             onChange={e => this.updateInput("newItem", e.target.value)}
//           />
//           <button
//             onClick={() => this.addItem()}
//             disabled={!this.state.newItem.length}
//           >
//             &#43; Add
//           </button>
//           <br /> <br />
//           <ul>
//             {this.state.list.map(item => {
//               return (
//                 <li key={item.id}>
//                   {item.value}
//                   <button onClick={() => this.deleteItem(item.id)}>
//                     Remove
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }


export default App;

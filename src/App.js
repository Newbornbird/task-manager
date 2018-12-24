import React, { Component } from 'react';
import ModalWelcome from './components/ModalWelcome.jsx';
import Column from './components/Column.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHANGE_COLUMNNAME, ADD_COLUMN, ADD_CARD, DELETE_CARD, 
  ENTER_AUTHOR_NAME, DEACTIVATE_MODAL_WELCOME } from './actions';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     columnList: [ 0, 1, 2, 3 ],
  //     columnNames: [ 'TODO', 'In progress', 'Testing', 'DONE'],
  //     author: '',
  //     modalWelcomeIsActive: true
  //   }
    
  // }

  // enterAuthorName = (event) => {
  //   this.setState({ author: event.target.value });
  // }

  // unActivateModalWelcome = () => {
  //   if(!this.state.author) {
  //     return;
  //   }
  //   this.setState( { modalWelcomeIsActive: false } );
   

  // }

  // addColumn = () => {
  //   let columnList = this.state.columnList.concat();
  //   let columnNames = this.state.columnNames.concat();
  //   columnList.push(this.state.columnList.length);
  //   columnNames.push('Введите название');
  //   this.setState( (state) => ({
  //     columnList,
  //     columnNames
  //   }) ) ;
    
  // }

  // saveStateToLocalStorage = () => {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  // hydrateStateWithLocalStorage = () => {
  //   // for all items in state
  //   for (let key in this.state) {
  //     // if the key exists in localStorage
  //     if (localStorage.hasOwnProperty(key)) {
  //       // get the key's value from localStorage
  //       let value = localStorage.getItem(key);

  //       // parse the localStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  // componentDidMount() {
  //   this.hydrateStateWithLocalStorage();
    
  // }

  // componentDidUpdate() {
  //   this.saveStateToLocalStorage();
  // }

  // clear = () => {
  //   localStorage.clear();
  // }
  
  render() {
    return  (
      <div>
        <ModalWelcome 
          modalWelcomeIsActive = { this.props.modalWelcome.isActive }
          ENTER_AUTHOR_NAME = { this.props.ENTER_AUTHOR_NAME }
          DEACTIVATE_MODAL_WELCOME = { this.props.DEACTIVATE_MODAL_WELCOME }
          authorName = { this.props.modalWelcome.authorName }
        />
        <div className="container">
          <div className="row">
            {this.props.columns.map( (item) => (
              <Column 
                key={item.columnId}
                columnId = {item.columnId} 
                columnName = {item.columnName}
                cards = {item.cards}
                CHANGE_COLUMNNAME = {this.props.CHANGE_COLUMNNAME}
                ADD_CARD = {this.props.ADD_CARD}
                DELETE_CARD = {this.props.DELETE_CARD}
                authorName = {this.props.modalWelcome.authorName}
              />))
            }
            <button 
              className="btn btn-primary btn-sm" 
              type="submit" 
              onClick={() => { this.props.ADD_COLUMN('Введите название')} }>
              +column
            </button>
            {/* <button className="btn btn-primary btn-sm" type="submit" onClick={this.clear}>
              clear
            </button>          */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.columns,
    modalWelcome: state.modalWelcome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_COLUMN: bindActionCreators(ADD_COLUMN, dispatch),
    CHANGE_COLUMNNAME: bindActionCreators(CHANGE_COLUMNNAME, dispatch),
    ADD_CARD: bindActionCreators(ADD_CARD, dispatch),
    DELETE_CARD: bindActionCreators(DELETE_CARD, dispatch),
    ENTER_AUTHOR_NAME: bindActionCreators(ENTER_AUTHOR_NAME, dispatch),
    DEACTIVATE_MODAL_WELCOME: bindActionCreators(DEACTIVATE_MODAL_WELCOME, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

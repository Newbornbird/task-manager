import React, { Component } from 'react';
import ModalWelcome from './components/ModalWelcome.jsx';
import Column from './components/Column.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHANGE_COLUMNNAME, ADD_COLUMN, ADD_CARD, DELETE_CARD, 
  ENTER_AUTHOR_NAME, DEACTIVATE_MODAL_WELCOME } from './actions';
import './App.css';

class App extends Component {
    
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
          </div>
          {/* <button 
              className="btn btn-primary btn-sm" 
              type="submit" 
              onClick={() => { this.props.ADD_COLUMN('Введите название')} }>
              +column
          </button> */}
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

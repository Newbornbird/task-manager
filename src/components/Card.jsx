import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHANGE_CARDNAME, CHANGE_CARD_DESCRIPTION, ADD_COMMENT } from '../actions';
import Modal from './Modal.jsx';


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardIsActive: false,
      inputForChangingCardNameIsActive: false
      
    }
  }

  makeCardActive = () => {
    this.setState({
      cardIsActive: true
    })
  }

  makeCardUnActive = () => {
    this.setState({
      cardIsActive: false,
       
    })
  }

  makeInputActive = () => {
    this.setState({
      inputForChangingCardNameIsActive: true
    })
  }

  makeInputUnActive = () => {
    this.setState({
      inputForChangingCardNameIsActive: false
    })
  }


  render() {
    return (
      <div 
        className = { 
          this.state.cardIsActive ? "card border-5 border-secondary mt-2 mb-4 shadow bg-light rounded " : "card border-5 border-secondary mt-2 mb-4 shadow bg-white rounded" }
        onMouseEnter = { this.makeCardActive }
        onMouseLeave = { this.makeCardUnActive }
        
      >   
          
            {/* <button type="button" className="close btn btn-primary w-25" aria-label="Close" 
              onClick={() => {
                this.props.DELETE_CARD(this.props.columnId, this.props.cardId)
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
            <p className = { this.state.inputForChangingCardNameIsActive ? "d-none" : this.state.cardIsActive ? "d-block bg-light m-2" : "d-block bg-white m-2" }
              onClick = { this.makeInputActive }
            >
              {this.props.cardInformation.cardName}
            </p>
            <input 
              type="text" 
              name="cardName"
              className = { !this.state.inputForChangingCardNameIsActive ? "d-none" : "form-control form-control-sm mt-2 bg-white" }  
              autoFocus
              id="inputCardName" 
              aria-describedby=""
              value = {this.props.cardInformation.cardName}
              onChange = {(event) => {
                this.props.CHANGE_CARDNAME(this.props.cardId, event.target.value, event.type)}
              }
              onBlur = { (event) => {
                this.props.CHANGE_CARDNAME(this.props.cardId, event.target.value, event.type);
                this.makeInputUnActive()
              }}
            >
            </input>
                  
          <div className="card-body">
            <Modal 
              columnName = {this.props.columnName}
              columnId = {this.props.columnId}
              cardName = {this.props.cardInformation.cardName} 
              cardDescription = {this.props.cardInformation.cardDescription} 
              comments = {this.props.cardInformation.comments}
              CHANGE_CARDNAME = {this.props.CHANGE_CARDNAME}
              CHANGE_CARD_DESCRIPTION = {this.props.CHANGE_CARD_DESCRIPTION}
              cardId = {this.props.cardId}
              ADD_COMMENT = {this.props.ADD_COMMENT}
              DELETE_CARD = {this.props.DELETE_CARD}
              authorName = {this.props.authorName}
            />
            
            <div className = { this.props.cardInformation.comments.length ? "d-block mt-2 mb-0" : "d-none mt-2 mb-0" }>
              <span className= { this.props.cardInformation.comments.length ? "badge badge-info" : "d-none" }>Комментарии: {this.props.cardInformation.comments.length}</span>
            </div>
          </div>
        </div>
      )
    }

  }

const mapStateToProps = (state, ownProps) => {
  return {
    cardInformation: state.cards[ownProps.cardId],
    authorName: state.modalWelcome.authorName
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CHANGE_CARDNAME: bindActionCreators(CHANGE_CARDNAME, dispatch),
    CHANGE_CARD_DESCRIPTION: bindActionCreators(CHANGE_CARD_DESCRIPTION, dispatch),
    ADD_COMMENT: bindActionCreators(ADD_COMMENT, dispatch)
    
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
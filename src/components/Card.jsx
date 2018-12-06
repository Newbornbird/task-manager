import React, { Component } from 'react';
import Modal from './Modal.jsx';


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardName: 'Новая карточка',
      cardText: 'Введите Описание',
      cardComments: [],
      
    }
  }
  
handleChange = (event) => {
  if(event.target.name === 'cardName') {
    this.setState({
      cardName: event.target.value,
      })
      } else if(event.target.name === 'cardText') {
          this.setState({
            cardText: event.target.value
          })
        }
  }

addComment = (event) => {
  if(!event.target.cardComment.value) {
    event.preventDefault()
    return
  }
  let cardComments = this.state.cardComments.concat();
  cardComments.push({ 
    commentText: event.target.cardComment.value,
    inputForUpdatingComment: false
  });
  
  this.setState( { cardComments } );
  event.target.cardComment.value = '';
  event.preventDefault()
}

removeComment = (comment) => {
  let cardComments = this.state.cardComments.concat();
  cardComments.splice(cardComments.indexOf(comment), 1);
  this.setState( {cardComments} );
}

activateInputForUpdateComments = (comment) => {
    let cardComments = this.state.cardComments.concat();
    let index = cardComments.indexOf(comment);
    cardComments[index].inputForUpdatingComment = true;
    this.setState({cardComments});
}

updateComment = (event, comment) => {
  let cardComments = this.state.cardComments.concat();
  let index = cardComments.indexOf(comment);
  cardComments[index].commentText = event.target.value;
  
  this.setState({ cardComments });
}

saveUpdatingComment = (comment) => {
    let cardComments = this.state.cardComments.concat();
    let index = cardComments.indexOf(comment);
    cardComments[index].inputForUpdatingComment = false;
    this.setState({cardComments});
}

saveStateToLocalStorage = () => {
  localStorage.setItem(this.props.cardNumber, JSON.stringify(this.state));
    
}

hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty(this.props.cardNumber)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(this.props.cardNumber);
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState( state => {
              return { 
                cardName: value.cardName,
                cardText: value.cardText,
                cardComments: value.cardComments
              }
          } );
        } catch (e) {
          // handle empty string
            this.setState( state => {
              return { 
                cardName: value.cardName,
                cardText: value.cardText,
                cardComments: value.cardComments
              }
              } 
            );
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

render() {
  return (
    <div className="card w-90 mt-2 mb-2">
        {/* <div className="card-header"> */}
          <button type="button" className="close btn btn-primary" aria-label="Close" 
            onClick={() => { this.props.removeCard(this.props.cardNumber)}}>
            <span aria-hidden="true">&times;</span>
          </button>
          <input 
            type="email" 
            name="cardName"
            className="form-control border-0" 
            id="inputCardName" 
            aria-describedby=""
            value={this.state.cardName}
            onChange={this.handleChange}>
          </input>
          {/* {this.state.cardName} */}
        {/* </div> */}
        <div className="card-body">
          {/* <p className="card-text">{this.state.cardText}</p> */}
          <Modal 
            columnName = {this.props.columnName}
            cardName = {this.state.cardName} 
            cardText = {this.state.cardText} 
            cardComments = {this.state.cardComments}
            handleChange = {this.handleChange}
            removeComment = {this.removeComment}
            cardNumber = {this.props.cardNumber}
            addComment = {this.addComment}
            updateComment = {this.updateComment}
            activateInputForUpdateComments = {this.activateInputForUpdateComments}
            saveUpdatingComment = {this.saveUpdatingComment}
            author = {this.props.author}
            
          />
          {/* <button className="btn btn-primary">{this.props.id}</button> */}
          <div>
            <span className="badge badge-danger">Комментарии: {this.state.cardComments.length}</span>
          </div>
        </div>
      </div>
    )
  }

}

export default Card;
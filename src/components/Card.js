import React, { Component } from 'react';
import Modal from './Modal';
// import But from './But';

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
      <div className="card w-90 mt-2">
          <div className="card-header">
            <button type="button" className="close btn btn-primary" aria-label="Close" 
              onClick={() => { this.props.removeCard(this.props.cardNumber)}}>
              <span aria-hidden="true">&times;</span>
            </button>
            {this.state.cardName}
          </div>
          <div className="card-body">
            {/* <p className="card-text">{this.state.cardText}</p> */}
            <Modal 
              cardName = {this.state.cardName} 
              cardText = {this.state.cardText} 
              cardComments = {this.state.cardComments}
              handleChange = {this.handleChange}
              cardNumber = {this.props.cardNumber}
              // columnId = {this.props.columnId}
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
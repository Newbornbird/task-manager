import React, { Component } from 'react';
// import But from './But';

class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cardName: 'Введите имя',
        cardText: 'Введите Описание',
        cardComments: 0
      }
      
    }   

    render() {
      return (
        <div className="card w-90 mt-2">
          <div className="card-header">
            <button type="button" className="close btn btn-primary" aria-label="Close" 
              onClick={() => { this.props.f(this.props.id)}}>
              <span aria-hidden="true">&times;</span>
            </button>
            {this.state.cardName}
          </div>
          <div className="card-body">
            <p className="card-text">{this.state.cardText}</p>
            <button className="btn btn-primary">{this.props.id}</button>
            <div>
              <span className="badge badge-danger">Комментарии: {this.state.cardComments}</span>
            </div>
          </div>
        </div>
      )
    }
  
  }

export default Card;
import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [],
            cardNumber: Date.now()
        }
        this.addCard = this.addCard.bind(this);   
    }

    addCard() {
        this.setState( (state) => ({
            cardList: state.cardList.concat(<Card number="state.cardNumber"/>),
            cardNumber: Date.now()
            })

        )
    }

    render() {
        return (
            <div className="col border" key={this.props.id}>
                Название колонки
                <button className="btn btn-primary" type="submit" onClick={this.addCard}>
                    +task
                </button>

                {this.state.cardList}
            </div>
                
        )
    }
        


       
    
}
                           

export default Column;
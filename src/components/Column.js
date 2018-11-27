import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [],
            cardNumber: Date.now(),
                   
        }
        this.removeCard = this.removeCard.bind(this);
               
    }

    addCard = () => {
        this.setState( (state) => ({
            cardList: state.cardList.concat(<Card 
                f={this.removeCard} 
                id={state.cardList.length} 
                key={this.state.cardNumber}/>),
            cardNumber: Date.now()
            })
        )
    }

    removeCard(cardIndex) {
        const pop = this.state.cardList.concat();
        pop.splice(cardIndex, 1, '');
        this.setState( (state) => {
            
            return {cardList: pop}
        }
        )
    }

    render() {
        return (
            <div className="col border">
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
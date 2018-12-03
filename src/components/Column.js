import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnName: this.props.columnName,
            cards: [],
            
        }
    }

    addCard = () => {
        const cards = this.state.cards.concat();
        cards.push(Date.now());
        this.setState( (state) => {
            return {cards}
            }
        ) 
    }

    removeCard = (cardIndex) => {
        const cards = this.state.cards.concat();
        cards.splice(cards.indexOf(cardIndex), 1);
       
        this.setState( (state) => {
            return {cards}
        })

               
    }

    saveStateToLocalStorage = () => {
        localStorage.setItem('column' + this.props.columnId, JSON.stringify(this.state));
    }
    
    hydrateStateWithLocalStorage = () => {
        if (localStorage.hasOwnProperty('column' + this.props.columnId)) {
            // get the key's value from localStorage
            let value = localStorage.getItem('column' + this.props.columnId);
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState( state => {
                  return { 
                    columnName: value.columnName,
                    cards: value.cards,
                   }
              } );
            } catch (e) {
              // handle empty string
              this.setState( state => {
                return { 
                  columnName: value.columnName,
                  cards: value.cards,
                 }
            } );
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
            <div className="col border">
                {this.state.columnName}
                
                <button className="btn btn-primary" type="submit" onClick={this.addCard}>
                    +task
                </button>
                {this.state.cards.map( item => (
                    <Card 
                        // columnId={this.props.columnId}
                        removeCard={this.removeCard} 
                        cardNumber={item} 
                        key={item}
                    />))}
            </div>
                
        )
    }
        


       
    
}
                           

export default Column;
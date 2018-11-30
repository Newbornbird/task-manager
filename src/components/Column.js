import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnName: '',
            cardNumber: [],
            cardId: []
                   
        }
                       
    }

    addCard = () => {
        const cardNumber = this.state.cardNumber.concat();
        cardNumber.push(Date.now());
        this.setState( (state) => {
            return {cardNumber: cardNumber}
            }
        )

        
    }

    removeCard = (cardIndex) => {
        const pop = this.state.cardNumber.concat();
        pop.splice(pop.indexOf(cardIndex), 1);
        console.log(pop);
        this.setState( (state) => {
            
            return {cardNumber: pop}
        })

               
    }

    saveStateToLocalStorage = () => {
        
        for (let key in this.state) {
          // сохранить в local storage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
      }
    
      hydrateStateWithLocalStorage = () => {
        
        for (let key in this.state) {
          // проверка нахождения state в local storage
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
    

    
    render() {
        return (
            <div className="col border">
                Название колонки
                
                <button className="btn btn-primary" type="submit" onClick={this.addCard}>
                    +task
                </button>
                {this.state.cardNumber.map( item => (
                    <Card 
                        columnId={this.props.columnId}
                        removeCard={this.removeCard} 
                        cardNumber={item} 
                        key={item}
                    />))
                }
            </div>
                
        )
    }
        


       
    
}
                           

export default Column;
import React, { Component } from 'react';
import Card from './Card.jsx';
import uuid from 'uuid';

class Column extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         columnName: this.props.columnName,
    //         cards: [],
            
    //     }
    // }

//     addCard = () => {
//         const cards = this.state.cards.concat();
//         cards.push(Date.now());
//         this.setState( (state) => {
//             return {cards}
//             }
//         ) 
//     }

//     removeCard = (cardIndex) => {
//         const cards = this.state.cards.concat();
//         cards.splice(cards.indexOf(cardIndex), 1);
       
//         this.setState( (state) => {
//             return {cards}
//         })

               
//     }

//     handleChange = (event) => {
//         this.setState( { columnName: event.target.value } );
            
//     }

//     saveStateToLocalStorage = () => {
//         localStorage.setItem('column' + this.props.columnId, JSON.stringify(this.state));
//     }
    
//     hydrateStateWithLocalStorage = () => {
//         if (localStorage.hasOwnProperty('column' + this.props.columnId)) {
//             // get the key's value from localStorage
//             let value = localStorage.getItem('column' + this.props.columnId);
//             // parse the localStorage string and setState
//             try {
//               value = JSON.parse(value);
//               this.setState( state => {
//                   return { 
//                     columnName: value.columnName,
//                     cards: value.cards,
//                    }
//               } );
//             } catch (e) {
//               // handle empty string
//               this.setState( state => {
//                 return { 
//                   columnName: value.columnName,
//                   cards: value.cards,
//                  }
//             } );
//             }
          
//         }
//     }

//     componentDidMount() {
//         this.hydrateStateWithLocalStorage();
        
//       }
    
//       componentDidUpdate() {
//         this.saveStateToLocalStorage();
//       } 
    render() {
        return (
            <div className="col border">
                <input 
                    type="email" 
                    name="columnName"
                    className="form-control border-0" 
                    id="inputCardName" 
                    aria-describedby=""
                    value={this.props.columnName}
                    onChange={(event)=> { 
                        this.props.CHANGE_COLUMNNAME(event.target.value, this.props.columnId) 
                    }}
                >
                </input>
               
                {this.props.cards.map( item => (
                    <Card 
                        cardId = {item} 
                        key = {item}
                        columnName = {this.props.columnName}
                        columnId = {this.props.columnId}
                        DELETE_CARD = {this.props.DELETE_CARD}
                    />))}
                <button 
                    className="btn btn-primary" 
                    type="submit" 
                    onClick={ () => {this.props.ADD_CARD(this.props.columnId, uuid()) }}>
                    +task
                </button>
            </div>
                
        )
    }
          
    
}
                          

export default Column;
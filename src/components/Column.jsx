import React, { Component } from 'react';
import Card from './Card.jsx';
import uuid from 'uuid';

class Column extends Component {
    
    render() {
        return (
            <div className="col border border-primary mr-4 rounded">
                <input
                    // style = {{ color: 'white'}} 
                    type="email" 
                    name="columnName"
                    className="form-control form-control-plaintext border-0 form-control-sm mt-2" 
                    id="inputCardName" 
                    // aria-describedby=""
                    value={this.props.columnName}
                    onChange={(event)=> { 
                        this.props.CHANGE_COLUMN_NAME(event.target.value, this.props.columnId) 
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
                {/* <div className = "w-100 border"> */}
                    <button 
                        className="btn btn-primary btn-block mb-2 mt-3 w-100" 
                        type="button" 
                        onClick={ () => {this.props.ADD_CARD(this.props.columnId, uuid()) }}>
                        +task
                    </button>
                {/* </div> */}
            </div>
                
        )
    }
          
    
}
                          

export default Column;
import { combineReducers } from 'redux';
import uuid from 'uuid';

const initialState = {
  columns: [
    { columnId: 0, columnName: "TODO", cards: [] },
    { columnId: 1, columnName: "In  progress", cards: [] },
    { columnId: 2, columnName: "Testing", cards: [] },
    { columnId: 3, columnName: "Done", cards: [] },
   
  ],
  cards: [

  ]
}

function columnOperations(state = initialState.columns, action) {
  let copyOfState = state.concat()
  switch (action.type) {
    case 'ADD_COLUMN':
      return [
        ...state, { columnId: state.length, columnName: 'Введите название', cards: [] } 
        ];
    
    case 'CHANGE_COLUMNNAME':
      copyOfState[action.columnId].columnName = action.columnName
      return copyOfState;

    case 'ADD_CARD':
      copyOfState[action.columnId].cards.push(uuid())
      return copyOfState

    case 'DELETE_CARD':
      let cards = copyOfState[action.columnId].cards;
      cards.splice(cards.indexOf(action.cardId), 1);
      return copyOfState

    default:
      return state;
  }
}

function cardOperations (state = initialState.cards, action) {
  switch(action.type) {
    case 'ADD_CARD_INFORMATION':
      return state;
    
      default:
        return state;
  }
  
}


export default combineReducers({
  columns: columnOperations,
  cards: cardOperations
})
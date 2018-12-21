import { combineReducers } from 'redux';



const initialState = {
  columns: [
    { columnId: 0, columnName: "TODO", cards: [] },
    { columnId: 1, columnName: "In  progress", cards: [] },
    { columnId: 2, columnName: "Testing", cards: [] },
    { columnId: 3, columnName: "Done", cards: [] },
   
  ],
  cards: {}
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

    case 'ADD_CARD_TO_ARRAY':
      copyOfState[action.columnId].cards.push(action.cardId)
      return copyOfState

    case 'DELETE_CARD_FROM_ARRAY':
      let cards = copyOfState[action.columnId].cards;
      cards.splice(cards.indexOf(action.cardId), 1);
      return copyOfState

    default:
      return state;
  }
}

function cardOperations (state = initialState.cards, action) {
  let copyOfState = Object.assign( {}, { ...state } );
  switch(action.type) {
    case 'ADD_CARD_INFORMATION':
      copyOfState[action.cardId] = { 
        columnId: action.columnId, 
        cardName: 'Введите название',
        cardDescription: 'Введите описание',
        comments: []
      }
      return copyOfState;
    
    case 'DELETE_CARD_INFORMATION':
      delete copyOfState[action.cardId];
      return copyOfState

    case 'CHANGE_CARDNAME':
      console.log(copyOfState[action.cardId].cardName);
      copyOfState[action.cardId].cardName = action.cardName;
      console.log(copyOfState[action.cardId].cardName);
      return copyOfState
    
      default:
        return copyOfState;
  }
  
}


export default combineReducers({
  columns: columnOperations,
  cards: cardOperations
})
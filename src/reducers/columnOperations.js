import { initialState } from './index';


export function columnOperations(state = initialState.columns, action) {
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
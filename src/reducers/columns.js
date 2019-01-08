import { initialState } from './index';
import { handleActions } from 'redux-actions';

export const columns = handleActions({
  ADD_COLUMN: (state, action) => [ ...state, { columnId: state.length, columnName: 'Enter name', cards: [] } ],
  CHANGE_COLUMN_NAME: (state, action) => {
    let copyOfState = state.concat();
    copyOfState[action.payload.columnId].columnName = action.payload.columnName;
    return copyOfState
  },
  ADD_CARD_TO_ARRAY: (state, action) => {
    let copyOfState = state.concat();
    copyOfState[action.columnId].cards.push(action.cardId)
    return copyOfState

  },
  DELETE_CARD_FROM_ARRAY: (state, action) => {
    let copyOfState = state.concat();
    let cards = copyOfState[action.columnId].cards;
    cards.splice(cards.indexOf(action.cardId), 1);
    return copyOfState
  },
},
[
  { columnId: 0, columnName: "TODO", cards: [] },
  { columnId: 1, columnName: "In  progress", cards: [] },
  { columnId: 2, columnName: "Testing", cards: [] },
  { columnId: 3, columnName: "Done", cards: [] },
 
]
);


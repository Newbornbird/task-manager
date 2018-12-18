import { combineReducers } from 'redux';
import uuid from 'uuid';

const initialState = {
  columns : [
    { columnId: 0, columnName: "TODO", cards: [] },
    { columnId: 1, columnName: "In  progress", cards: [] },
    { columnId: 2, columnName: "Testing", cards: [] },
    { columnId: 3, columnName: "Done", cards: [] },
   
  ],
}

function columnOperations(state = initialState.columns, action) {
  switch (action.type) {
    case 'ADD_COLUMN':
          
      return [
        ...state, { columnId: state.length, columnName: 'Введите название', cards: [] } 
        ];
    
    case 'CHANGE_COLUMNNAME':
      let copyOfState = state.concat();
      copyOfState[action.columnId].columnName = action.payload
      return copyOfState;

    default:
      return state;
  }
} 
export default combineReducers({
  columns: columnOperations
})
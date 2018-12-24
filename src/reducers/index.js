import { combineReducers } from 'redux';
import { cardOperations } from './cardOperations';
import { columnOperations } from './columnOperations';
import { commentOperations } from './commentOperations';
import { modalWelcomeOperations } from './modalWelcomeOperations';

export const initialState = {
  modalWelcome: {authorName: '', isActive: true},
  columns: [
    { columnId: 0, columnName: "TODO", cards: [] },
    { columnId: 1, columnName: "In  progress", cards: [] },
    { columnId: 2, columnName: "Testing", cards: [] },
    { columnId: 3, columnName: "Done", cards: [] },
   
  ],
  cards: {},
  comments: {}
}

export default combineReducers({
  modalWelcome: modalWelcomeOperations,
  columns: columnOperations,
  cards: cardOperations,
  comments: commentOperations
})
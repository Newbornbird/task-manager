import { combineReducers } from 'redux';
import { cards } from './cards';
import { columns } from './columns';
import { comments } from './comments';
import { modalWelcome } from './modalWelcome';

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
  modalWelcome,
  columns,
  cards,
  comments
})
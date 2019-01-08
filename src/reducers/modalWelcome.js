import { initialState } from './index';
import  { handleActions } from 'redux-actions';

export const modalWelcome = handleActions(
  {
    ENTER_AUTHOR_NAME: (state, action) => ({ ...state, authorName: action.payload }),
    DEACTIVATE_MODAL_WELCOME: (state, action) => ({ ...state, isActive: false })
  },
  {authorName: '', isActive: true}
);


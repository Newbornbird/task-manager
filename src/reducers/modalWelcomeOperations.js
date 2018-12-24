import { initialState } from './index';

export function modalWelcomeOperations (state = initialState.modalWelcome, action) {
  switch(action.type) {

    case 'ENTER_AUTHOR_NAME':
      return { ...state, authorName: action.authorName };

    case 'DEACTIVATE_MODAL_WELCOME':
      return { ...state, isActive: false };
    
    default:
      return state;
  }
}
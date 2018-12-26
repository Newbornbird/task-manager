import { initialState } from './index';

export function cardOperations (state = initialState.cards, action) {
  let copyOfState = Object.assign( {}, { ...state } );
  switch(action.type) {
    case 'ADD_CARD_INFORMATION':
      copyOfState[action.cardId] = { 
        columnId: action.columnId, 
        cardName: 'Введите название',
        cardDescription: 'Введите сюда дополнительное описание',
        comments: []
      }
      return copyOfState;
    
    case 'DELETE_CARD_INFORMATION':
      delete copyOfState[action.cardId];
      return copyOfState

    case 'CHANGE_CARDNAME':
      return { ...state, [action.cardId]: { ...state[action.cardId], cardName: action.cardName } };

    case 'CHANGE_CARD_DESCRIPTION':
      return { ...state, [action.cardId]: { ...state[action.cardId], cardDescription: action.cardDescription } };

    case 'ADD_COMMENT_TOARRAY':
      return { ...state, [action.cardId]: { ...state[action.cardId], comments: [ ...state[action.cardId].comments, action.commentId ] } }
      // copyOfState[action.cardId].comments.push(action.commentId);
      // return copyOfState;

    case 'DELETE_COMMENT_FROM_ARRAY':
      let comments = copyOfState[action.cardId].comments;
      comments.splice(comments.indexOf(action.commentId), 1);
      return { ...state, [action.cardId]: { ...state[action.cardId], comments: [ ...comments ] } };
    
      default:
        return copyOfState;
  }
  
}
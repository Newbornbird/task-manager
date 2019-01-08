import { initialState } from './index';
import { handleActions } from 'redux-actions';


export const cards = handleActions(
  {
    ADD_CARD_INFORMATION: (state, action) => 
      ({...state, [action.cardId]: { 
        columnId: action.columnId, 
        cardName: 'Введите название',
        cardDescription: 'Введите сюда дополнительное описание',
        comments: []
      }}),

    DELETE_CARD_INFORMATION: (state, action) => { 
      let copyOfState = {...state};
       delete copyOfState[action.cardId];
      return copyOfState;
    },
    
    CHANGE_CARD_NAME: (state, action) =>
      ({ ...state, [action.cardId]: { ...state[action.cardId], cardName: action.cardName } }),
      
    CHANGE_CARD_DESCRIPTION: (state, action) =>
      ({ ...state, [action.payload.cardId]: { ...state[action.payload.cardId], cardDescription: action.payload.cardDescription } }),

    ADD_COMMENT_TO_ARRAY: (state, action) =>
      ({ ...state, [action.cardId]: { ...state[action.cardId], comments: [ ...state[action.cardId].comments, action.commentId ] } }),
      
    DELETE_COMMENT_FROM_ARRAY: (state, action) => {
      let copyOfState = [ ...state[action.cardId].comments ];
      copyOfState.splice(copyOfState.indexOf(action.commentId), 1);
      return { ...state, [action.cardId]: { ...state.cardId, comments: [ ...copyOfState ] } }
    }
  },
  {}

);


import { initialState } from './index'; 

export function commentOperations(state = initialState.comments, action) {
  let copyOfState = Object.assign( {}, {...state} );
  switch(action.type) {
    case 'ADD_COMMENT_INFORMATION':
      // copyOfState[action.commentId] = { commentText: action.commentText, inputForUpdatingComment: false };
      // return copyOfState;
      return { ...state, [action.commentId]: { commentText: action.commentText, inputForUpdatingComment: false } };
      
    case 'DELETE_COMMENT_INFORMATION':
      delete copyOfState[action.commentId];
      return copyOfState;

    case 'UPDATE_COMMENT':
      return copyOfState;

    default:
      return copyOfState
  }
}
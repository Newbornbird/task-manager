import { initialState } from './index'; 

export function commentOperations(state = initialState.comments, action) {
  let copyOfState = Object.assign( {}, {...state} );
  let comment = copyOfState[action.commentId];
  switch(action.type) {
    case 'ADD_COMMENT_INFORMATION':
      // copyOfState[action.commentId] = { commentText: action.commentText, inputForUpdatingComment: false };
      // return copyOfState;
      return { ...state, [action.commentId]: { commentText: action.commentText, inputForUpdatingComment: false } };
      
    case 'DELETE_COMMENT_INFORMATION':
      delete copyOfState[action.commentId];
      return copyOfState;

    case 'ACTIVATE_INPUT_FOR_CHANGING_COMMENT':
      comment.inputForUpdatingComment = true;
      return { ...state, [action.commentId]: { ...comment } };

    case 'CHANGE_COMMENT':
      comment.commentText = action.commentText;
      return { ...state, [action.commentId]: { ...comment } };

    case 'DEACTIVATE_INPUT_FOR_CHANGING_COMMENT':
    comment.inputForUpdatingComment = false;
    return { ...state, [action.commentId]: { ...comment } };

    default:
      return copyOfState
  }
}
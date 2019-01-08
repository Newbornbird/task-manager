import { initialState } from './index'; 
import { handleActions } from 'redux-actions';

export const comments = handleActions({
  ADD_COMMENT_INFORMATION: (state, action) => 
    ({ ...state, [action.commentId]: { commentText: action.commentText, inputForUpdatingComment: false } }),
  
  DELETE_COMMENT_INFORMATION: (state, action) => {
    let copyOfState = { ...state }; 
    delete copyOfState[action.commentId];
    return copyOfState
  },
  
  ACTIVATE_INPUT_FOR_CHANGING_COMMENT: (state, action) => 
    ({ ...state, [action.payload]: { ...state[action.payload],  inputForUpdatingComment: true } }),
  
  CHANGE_COMMENT: (state, action) => 
    ({ ...state, [action.payload.commentId]: { ...state[action.payload.commentId],  commentText: action.payload.commentText } }),
  
  DEACTIVATE_INPUT_FOR_CHANGING_COMMENT: (state, action) =>
    ({ ...state, [action.payload]: { ...state[action.payload],  inputForUpdatingComment: false } }),
},
  {}
);




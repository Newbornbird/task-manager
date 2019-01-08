import { createAction } from 'redux-actions';

export const ENTER_AUTHOR_NAME = createAction('ENTER_AUTHOR_NAME');

export function DEACTIVATE_MODAL_WELCOME(authorName) {
  return dispatch => {
    if(!authorName) {
      return;
    }
    dispatch({
      type: 'DEACTIVATE_MODAL_WELCOME',
      
    })
  }
}

export const ADD_COLUMN = createAction('ADD_COLUMN');

export const CHANGE_COLUMN_NAME = createAction(
  'CHANGE_COLUMN_NAME', 
  (columnName, columnId) => ({columnName, columnId})
);

export function ADD_CARD(columnId, cardId) {
  return dispatch => {
    dispatch({
      type: 'ADD_CARD_TO_ARRAY',
      columnId,
      cardId
    })
    
    dispatch({
      type: 'ADD_CARD_INFORMATION',
      columnId,
      cardId
    })
  }
}

export function DELETE_CARD(columnId, cardId) {
  return dispatch => {
    dispatch({
      type: 'DELETE_CARD_FROM_ARRAY',
      columnId,
      cardId
    })
    
    dispatch({
      type: 'DELETE_CARD_INFORMATION',
      cardId
    })
  }
}

export const ADD_COLUMN_INFORMATION = createAction('ADD_COLUMN_INFORMATION');

export function CHANGE_CARD_NAME(cardId, cardName, eventType) {
  return dispatch => {
    if(eventType === 'blur' && !cardName){
      dispatch({
        type: 'CHANGE_CARD_NAME',
        cardId,
        cardName: 'Введите название'

      })
    } else {
      dispatch({
        type: 'CHANGE_CARD_NAME',
        cardId,
        cardName
      })
    }
  }  
}

export const CHANGE_CARD_DESCRIPTION = createAction(
  'CHANGE_CARD_DESCRIPTION',
  (cardId, cardDescription) => ({cardId, cardDescription})
);

export function ADD_COMMENT(cardId, commentId, commentText) {
  
  return dispatch => {
    if(!commentText) {
      return
    }
    dispatch({
      type: 'ADD_COMMENT_TO_ARRAY',
      cardId,
      commentId
    })
    
    dispatch({
      type: 'ADD_COMMENT_INFORMATION',
      commentId,
      commentText
    })
  }
}

export const ACTIVATE_INPUT_FOR_CHANGING_COMMENT = createAction('ACTIVATE_INPUT_FOR_CHANGING_COMMENT');

export const CHANGE_COMMENT = createAction(
  'CHANGE_COMMENT',
  (commentId, commentText) => ({commentId, commentText})
);

export const DEACTIVATE_INPUT_FOR_CHANGING_COMMENT = createAction('DEACTIVATE_INPUT_FOR_CHANGING_COMMENT');

export function DELETE_COMMENT(cardId, commentId) {
  return dispatch => {
        
    dispatch({
      type: 'DELETE_COMMENT_FROM_ARRAY',
      cardId,
      commentId
    })
    
    dispatch({
      type: 'DELETE_COMMENT_INFORMATION',
      commentId,
    })

    
  }
}


// export function ENTER_AUTHOR_NAME(authorName) {
//   return {
//     type: 'ENTER_AUTHOR_NAME',
//     authorName
//   }
// }

// export function ADD_COLUMN_INFORMATION(cardId) {
//   return {
//     type: 'ADD_COLUMN_INFORMATION',
//     cardId
//   }
// }

// export function CHANGE_COLUMN_NAME(columnName, columnId) {
//   return {
//     type: 'CHANGE_COLUMN_NAME',
//     columnName,
//     columnId
//   }

// }

// export function CHANGE_CARD_DESCRIPTION(cardId, cardDescription) {
//   return {
//     type: 'CHANGE_CARD_DESCRIPTION',
//     cardId,
//     cardDescription
//   }

// }

// export function ACTIVATE_INPUT_FOR_CHANGING_COMMENT(commentId) {
//   return {
//     type: 'ACTIVATE_INPUT_FOR_CHANGING_COMMENT',
//     commentId
//   }
// }

// export function CHANGE_COMMENT(commentId, commentText) {
//   return {
//     type: 'CHANGE_COMMENT',
//     commentId,
//     commentText
//   }
// }

// export function DEACTIVATE_INPUT_FOR_CHANGING_COMMENT(commentId) {
//   return {
//     type: 'DEACTIVATE_INPUT_FOR_CHANGING_COMMENT',
//     commentId
//   }
// }

// export function ADD_COLUMN (columnName) {
//   return {
//     type: 'ADD_COLUMN',
//     payload: columnName
//   }
// }
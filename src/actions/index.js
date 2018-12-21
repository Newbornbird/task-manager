export function ADD_COLUMN (columnName) {
  return {
    type: 'ADD_COLUMN',
    payload: columnName
  }
}

export function CHANGE_COLUMNNAME(columnName, columnId) {
  return {
    type: 'CHANGE_COLUMNNAME',
    columnName,
    columnId
  }

}

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

export function ADD_COLUMN_INFORMATION(cardId) {
  return {
    type: 'ADD_COLUMN_INFORMATION',
    cardId
  }
}

export function CHANGE_CARDNAME(cardId, cardName) {
  return {
    type: 'CHANGE_CARDNAME',
    cardId,
    cardName
  }
}

export function CHANGE_CARD_DESCRIPTION() {

}

export function ADD_COMMENT() {

}

export function CHANGE_COMMENT() {

}

export function DELETE_COMMENT() {

}




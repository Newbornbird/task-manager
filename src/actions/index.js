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

export function ADD_CARD(columnId) {
 return {
   type: 'ADD_CARD',
   columnId,
   
 } 
}

export function DELETE_CARD(columnId, cardId) {
  return {
    type: 'DELETE_CARD',
    columnId,
    cardId
  }
}

export function ADD_COLUMN_INFORMATION(cardId) {
  return {
    type: 'ADD_COLUMN_INFORMATION',
    cardId
  }
}

export function CHANGE_CARDNAME() {

}

export function CHANGE_CARDDESCRIPTION() {

}


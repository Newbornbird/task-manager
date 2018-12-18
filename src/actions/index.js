export function ADD_COLUMN (columnName) {
  return {
    type: 'ADD_COLUMN',
    payload: columnName
  }
}

export function CHANGE_COLUMNNAME(columnName, columnId) {
  return {
    type: 'CHANGE_COLUMNNAME',
    payload: columnName,
    columnId
  }

}

export function ADD_CARD(cardName) {
 return {
   type: 'ADD_CARD',
   payload: cardName
 } 
}

export function DELETE_CARD(id) {
  return {
    type: 'DELETE_CARD',
    payload: id
  }
}

export function CHANGE_CARDNAME() {

}

export function CHANGE_CARDDESCRIPTION() {

}


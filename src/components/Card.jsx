import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { ADD_COLUMN_INFORMATION } from '../actions';
// import Modal from './Modal.jsx';


class Card extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cardName: 'Новая карточка',
  //     cardText: 'Введите Описание',
  //     cardComments: [],
      
  //   }
  // }
  
// handleChange = (event) => {
//   if(event.target.name === 'cardName') {
//     this.setState({
//       cardName: event.target.value,
//       })
//       } else if(event.target.name === 'cardText') {
//           this.setState({
//             cardText: event.target.value
//           })
//         }
//   }

// addComment = (event) => {
//   if(!event.target.cardComment.value) {
//     event.preventDefault()
//     return
//   }
//   let cardComments = this.state.cardComments.concat();
//   cardComments.push({ 
//     commentText: event.target.cardComment.value,
//     inputForUpdatingComment: false
//   });
  
//   this.setState( { cardComments } );
//   event.target.cardComment.value = '';
//   event.preventDefault()
// }

// removeComment = (comment) => {
//   let cardComments = this.state.cardComments.concat();
//   cardComments.splice(cardComments.indexOf(comment), 1);
//   this.setState( {cardComments} );
// }

// activateInputForUpdateComments = (comment) => {
//     let cardComments = this.state.cardComments.concat();
//     let index = cardComments.indexOf(comment);
//     cardComments[index].inputForUpdatingComment = true;
//     this.setState({cardComments});
// }

// updateComment = (event, comment) => {
//   let cardComments = this.state.cardComments.concat();
//   let index = cardComments.indexOf(comment);
//   cardComments[index].commentText = event.target.value;
  
//   this.setState({ cardComments });
// }

// saveUpdatingComment = (comment) => {
//     let cardComments = this.state.cardComments.concat();
//     let index = cardComments.indexOf(comment);
//     cardComments[index].inputForUpdatingComment = false;
//     this.setState({cardComments});
// }

// saveStateToLocalStorage = () => {
//   localStorage.setItem(this.props.cardNumber, JSON.stringify(this.state));
    
// }

// hydrateStateWithLocalStorage = () => {
//     if (localStorage.hasOwnProperty(this.props.cardNumber)) {
//         // get the key's value from localStorage
//         let value = localStorage.getItem(this.props.cardNumber);
//         // parse the localStorage string and setState
//         try {
//           value = JSON.parse(value);
//           this.setState( state => {
//               return { 
//                 cardName: value.cardName,
//                 cardText: value.cardText,
//                 cardComments: value.cardComments
//               }
//           } );
//         } catch (e) {
//           // handle empty string
//             this.setState( state => {
//               return { 
//                 cardName: value.cardName,
//                 cardText: value.cardText,
//                 cardComments: value.cardComments
//               }
//               } 
//             );
//           }
//   }
// }

// componentDidMount() {
//   this.props.ADD_COLUM_NINFORMATION(this.props.cardId);
//   this.hydrateStateWithLocalStorage();
//     window.addEventListener(
//       "beforeunload",
//       this.saveStateToLocalStorage()
//     );
// }

// componentDidUpdate() {
//   this.saveStateToLocalStorage();
// }

render() {
  return (
    <div className="card w-90 mt-2 mb-2">
        
          <button type="button" className="close btn btn-primary" aria-label="Close" 
            onClick={() => {
              this.props.DELETE_CARD(this.props.columnId, this.props.cardId)
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <input 
            type="email" 
            name="cardName"
            className="form-control border-0" 
            id="inputCardName" 
            aria-describedby=""
            // value='Название карточки'
            // onChange={this.handleChange}
          >
          </input>
                 
        <div className="card-body">
          
          {/* <Modal 
            columnName = {this.props.columnName}
            cardName = {this.state.cardName} 
            cardText = {this.state.cardText} 
            cardComments = {this.state.cardComments}
            handleChange = {this.handleChange}
            removeComment = {this.removeComment}
            cardNumber = {this.props.cardNumber}
            addComment = {this.addComment}
            updateComment = {this.updateComment}
            activateInputForUpdateComments = {this.activateInputForUpdateComments}
            saveUpdatingComment = {this.saveUpdatingComment}
            author = {this.props.author}
            
          /> */}
          
          <div>
            {/* <span className="badge badge-danger">Комментарии: {this.state.cardComments.length}</span> */}
          </div>
        </div>
      </div>
    )
  }

}

// const mapStateToProps = (state) => {
//   return {
//     cardInformation: state.cards
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     ADD_COLUMN_INFORMATION: bindActionCreators(ADD_COLUMN_INFORMATION, dispatch)
    
//   }
// }

export default Card;
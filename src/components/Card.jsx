import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHANGE_CARDNAME, CHANGE_CARD_DESCRIPTION, ADD_COMMENT } from '../actions';
import Modal from './Modal.jsx';


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
            value = {this.props.cardInformation.cardName}
            onChange = {(event) => {
              this.props.CHANGE_CARDNAME(this.props.cardId, event.target.value)}
            }
          >
          </input>
                 
        <div className="card-body">
          
          <Modal 
            columnName = {this.props.columnName}
            cardName = {this.props.cardInformation.cardName} 
            cardDescription = {this.props.cardInformation.cardDescription} 
            comments = {this.props.cardInformation.comments}
            CHANGE_CARDNAME = {this.props.CHANGE_CARDNAME}
            CHANGE_CARD_DESCRIPTION = {this.props.CHANGE_CARD_DESCRIPTION}
            cardId = {this.props.cardId}
            ADD_COMMENT = {this.props.ADD_COMMENT}
            authorName = {this.props.authorName}
            
          />
          
          <div>
            <span className="badge badge-danger">Комментарии: {this.props.cardInformation.comments.length}</span>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    cardInformation: state.cards[ownProps.cardId],
    authorName: state.modalWelcome.authorName
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CHANGE_CARDNAME: bindActionCreators(CHANGE_CARDNAME, dispatch),
    CHANGE_CARD_DESCRIPTION: bindActionCreators(CHANGE_CARD_DESCRIPTION, dispatch),
    ADD_COMMENT: bindActionCreators(ADD_COMMENT, dispatch)
    
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
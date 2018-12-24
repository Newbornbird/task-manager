import React, { Component } from 'react';
import Comment from './Comment.jsx';
import uuid from 'uuid';

class Modal extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     columnId: this.props.columnId,
  //     cardNumber: this.props.cardNumber,
  //     cardComments: this.props.cardComments
  //   }
  // }

  render() {
       return (
        <div>
          <button 
            type = "button" 
            className = "btn btn-primary btn-sm" 
            data-toggle = "modal" 
            data-target = {"#exampleModal" + this.props.cardId}
            >
            Редактировать
          </button>
       
          <div className="modal fade" id = {"exampleModal" + this.props.cardId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role = "document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id = "exampleModalLabel">Редактор карточки</h5>
                  <button type = "button" className = "close" data-dismiss = "modal" aria-label = "Close">
                    <span aria-hidden="true">&times;</span>
                    
                  </button>
                </div>
                <div className="modal-body">
                  <form 
                    className="cardNameText" 
                    key='11'
                  >
                  
                  <div className="form-group">
                    <small>Автор карточки: {this.props.authorName}</small>
                    <div><small>В колонке: {this.props.columnName}</small></div>
                   
                    <input
                      name="cardName" 
                      type="text" 
                      className="form-control form-control-plaintext form-control-sm mt-2 border-0" 
                      id="exampleInput" 
                      aria-describedby="emailHelp" 
                      placeholder="Введите имя" 
                      value={this.props.cardName}
                      onChange={ (event) => {
                        this.props.CHANGE_CARDNAME(this.props.cardId, event.target.value)
                      } }
                    />
                    
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardTextArea">Описание</label>
                    <textarea
                      name="cardTextArea" 
                      onChange={this.props.handleChange}
                      className="form-control form-control-plaintext border-0" 
                      id="cardTextArea" 
                      rows="3"
                      value={this.props.cardText}>
                    </textarea>
                      
                  </div>
                 
                </form>
                <form 
                  className="cardComments" 
                  onSubmit = { (event) => {
                    this.props.ADD_COMMENT(this.props.cardId, uuid(), event.target.cardComment.value);
                    event.target.cardComment.value = '';
                    event.preventDefault();
                  }} 
                  key='22'>
                  <label htmlFor="cardComment">Добавление комментария</label>
                  <textarea
                    name="cardComment" 
                    className="form-control" 
                    id="cardComment" 
                    rows="3"
                  >
                  </textarea>
                  <button type="submit" className="btn btn-primary btn-sm mt-2">Сохранить комментарий</button>
                </form>
                <div className="comments" key='1'>
                                 
                  {this.props.comments.map(item => (
                    <Comment
                      authorName = {this.props.authorName}
                      commentId = {item}
                      key = {item}
                      cardId = {this.props.cardId}               
                    />
                  ))}
                </div>
                </div>
                <div className="modal-footer" key='2'>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

  export default Modal;
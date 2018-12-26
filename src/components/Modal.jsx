import React, { Component } from 'react';
import Comment from './Comment.jsx';
import uuid from 'uuid';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputForCardDescriptionIsActive: false
    }
  }

  makeInputActive = () => {
    this.setState({
      inputForCardDescriptionIsActive: true
    })
  }

  makeInputUnActive = () => {
    this.setState({
      inputForCardDescriptionIsActive: false
    })
  }

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
       
          <div 
            className="modal" 
            id = {"exampleModal" + this.props.cardId} 
            tabIndex="-1" role="dialog" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true"
          >
            <div className="modal-dialog" role = "document">
              <div className="modal-content bg-light">
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
                    <label className="font-weight-bold" htmlFor={'cardName' + this.props.cardId}>Название</label>             
                    <input
                      name="cardName" 
                      type="text" 
                      className="form-control form-control-sm mt-2 bg-white border" 
                      id={'cardName' + this.props.cardId} 
                      aria-describedby="emailHelp" 
                      value={this.props.cardName}
                      onChange={ (event) => {
                        this.props.CHANGE_CARDNAME(this.props.cardId, event.target.value)
                      } }
                    /> 
                  </div>
                  <div>
                    <span class="badge badge-secondary">Карточку сотворил {this.props.authorName}</span>
                  </div>
                  <div>
                    <span class="badge badge-secondary">Задание находится на этапе: {this.props.columnName}</span>                
                  </div>
                  <div className="form-group mt-4">
                    <label className="font-weight-bold" htmlFor={'cardTextArea' + this.props.cardId}>Описание</label>
                    <p className={this.state.inputForCardDescriptionIsActive ? "d-none" : "border rounded bg-white"}
                      onClick = {this.makeInputActive}>
                      {this.props.cardDescription}
                    </p>
                    <textarea
                      name = "cardTextArea" 
                      style={{ resize: 'none'}}
                      className = {this.state.inputForCardDescriptionIsActive ? "form-control" : "d-none"} 
                      id = {'cardTextArea' + this.props.cardId} 
                      rows = "3"
                      value = {this.props.cardDescription}
                      onChange = {this.props.CHANGE_CARD_DESCRIPTION}
                      onBlur = {this.makeInputUnActive}
                    >
                    </textarea>
                      
                  </div>
                 
                </form>
                <form 
                  className="cardComments mb-4" 
                  onSubmit = { (event) => {
                    this.props.ADD_COMMENT(this.props.cardId, uuid(), event.target.cardComment.value);
                    event.target.cardComment.value = '';
                    event.preventDefault();
                  }} 
                  key='22'>
                  <label htmlFor={'cardComment' + this.props.cardId} className="font-weight-bold">Добавление комментария</label>
                  <textarea
                    style={{ resize: 'none'}}
                    name="cardComment" 
                    className="form-control" 
                    id={'cardComment' + this.props.cardId} 
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
                  <button 
                    onClick={() => {this.props.DELETE_CARD(this.props.columnId, this.props.cardId)}} 
                    type="button" className="btn btn-danger" data-dismiss="modal">
                    Удалить
                  </button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

  export default Modal;
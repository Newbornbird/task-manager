import React, { Component } from 'react';
import Comment from './Comment.jsx';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnId: this.props.columnId,
      cardNumber: this.props.cardNumber,
      cardComments: this.props.cardComments
    }
  }

  render() {
       return (
        <div>
          <button 
            type="button" 
            className="btn btn-primary btn-sm" 
            data-toggle="modal" 
            data-target={"#exampleModal" + this.state.cardNumber}>
            Редактировать
          </button>
       
          <div className="modal fade" id={"exampleModal"+ this.state.cardNumber} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Редактор карточки</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.props.handleSubmit} className="cardNameText" key='11'>
                  
                  <div className="form-group">
                    <small>Автор карточки: {this.props.author}</small>
                    <div><small>В колонке: {this.props.columnName}</small></div>
                   
                    <input
                      name="cardName" 
                      type="text" 
                      className="form-control border-0" 
                      id="exampleInput" 
                      aria-describedby="emailHelp" 
                      placeholder="Введите имя" 
                      value={this.props.cardName}
                      onChange={this.props.handleChange}
                    />
                    
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardTextArea">Описание</label>
                    <textarea
                      name="cardText" 
                      onChange={this.props.handleChange}
                      className="form-control border-0" 
                      id="cardTextArea" 
                      rows="3"
                      value={this.props.cardText}>
                    </textarea>
                      
                  </div>
                 
                </form>
                <form className="cardComments" onSubmit={this.props.addComment} key='22'>
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
                                 
                  {this.props.cardComments.map(item => (
                    <Comment
                      author = {this.props.author}
                      comment = {item}
                      key = {item.commentText}
                      removeComment = {this.props.removeComment}
                      updateComment = {this.props.updateComment}
                      activateInputForUpdateComments = {this.props.activateInputForUpdateComments}
                      saveUpdatingComment = {this.props.saveUpdatingComment}
                      

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
import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnId: this.props.columnId,
      cardId: this.props.cardId
    }
  }
  
  render() {
       return (
        <div>
          <button 
            type="button" 
            className="btn btn-primary" 
            data-toggle="modal" 
            data-target={"#exampleModal" + this.state.columnId + this.state.cardId}>
            Редактировать
          </button>
       
          <div className="modal fade" id={"exampleModal"+ this.state.columnId + this.state.cardId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Редактор карточки</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <form onSubmit={this.props.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Наименование</label>
                    <input
                      name="cardName" 
                      type="text" 
                      className="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp" 
                      placeholder="Введите имя" 
                      // value={this.state.cardName}
                      onChange={this.props.handleChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Описание</label>
                    <textarea
                      name="cardText" 
                      onChange={this.props.handleChange}
                      className="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="3">
                      </textarea>
                      
                  </div>
                  {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div> */}
                  {/* <button type="submit" className="btn btn-primary">Сохранить</button> */}
                </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                </div>
              </div>
            </div>
          </div>
          </div>
      )
    }
}

  export default Modal;
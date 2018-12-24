import React, { Component } from 'react';

class ModalWelcome extends Component {
    render() {
      return (
        <div className={ this.props.modalWelcomeIsActive ? "modal d-block" : "modal d-none" } tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Введите Ваше имя</h5>
                
              </div>
              <div className="modal-body">
                <form>
                  <input 
                    onChange = { (event) => { 
                      this.props.ENTER_AUTHOR_NAME(event.target.value) 
                    }} 
                    name="inputForModalWelcome" 
                    className="" type="text" 
                    size="59" 
                  />
                  <button 
                    onClick = {() => {
                      this.props.DEACTIVATE_MODAL_WELCOME(this.props.authorName) 
                    }} 
                    type="button" 
                    className="btn btn-primary float-right mt-3 mr-1">
                    Сохранить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

  export default ModalWelcome;
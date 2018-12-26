import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DELETE_COMMENT, ACTIVATE_INPUT_FOR_CHANGING_COMMENT, 
  CHANGE_COMMENT, DEACTIVATE_INPUT_FOR_CHANGING_COMMENT } from '../actions';

class Comment extends Component {
  render() {
       return (
        <div className="comment border mt-2 mb-2 p-2 bg-white">
          <p className="commentAuthor" style={{fontSize: '14px'}}>
            {this.props.authorName + ' прокомментировал:'}
          </p>
          <textarea
            style={{ resize: 'none', fontSize: '14px'}}
            className = {this.props.commentInformation.inputForUpdatingComment ? "d-block form-control font-italic" : "d-none"} 
            name = "inputForUpdatingComment" 
            value = {this.props.commentInformation.commentText} 
            id = "" 
            cols = "50" 
            rows = "2"
            onChange = { (event) => {this.props.CHANGE_COMMENT(this.props.commentId, event.target.value)} }
            >
          </textarea>
          <p 
            className = {this.props.commentInformation.inputForUpdatingComment ? "d-none commentText" : "d-block commentText font-italic"}
          >
            <span style={{fontSize: '14px'}}>"{this.props.commentInformation.commentText}"</span>
          </p>

          <div className="btn-group mt-2" role="group" aria-label="Basic example">
            <button
              style={{fontSize: '14px'}} 
              type="button" 
              className="btn btn-link" 
              onClick={()=> {this.props.DELETE_COMMENT(this.props.cardId, this.props.commentId)} }
            >
              Удалить
            </button>
            <button
              style={{fontSize: '14px'}} 
              type="button" 
              className="btn btn-link" 
              onClick = { () => {this.props.ACTIVATE_INPUT_FOR_CHANGING_COMMENT(this.props.commentId)} }
            >
              Изменить
            </button>
            <button
              style={{fontSize: '14px'}} 
              type="button" 
              className={this.props.commentInformation.inputForUpdatingComment ? "btn btn-link" : "btn btn-link disabled"} 
              onClick = { () => {this.props.DEACTIVATE_INPUT_FOR_CHANGING_COMMENT(this.props.commentId)} }
            >
              Сохранить
            </button>
          </div>
        </div>     
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    commentInformation: state.comments[ownProps.commentId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DELETE_COMMENT: bindActionCreators(DELETE_COMMENT, dispatch),
    ACTIVATE_INPUT_FOR_CHANGING_COMMENT: bindActionCreators(ACTIVATE_INPUT_FOR_CHANGING_COMMENT, dispatch),
    CHANGE_COMMENT: bindActionCreators(CHANGE_COMMENT, dispatch),
    DEACTIVATE_INPUT_FOR_CHANGING_COMMENT: bindActionCreators(DEACTIVATE_INPUT_FOR_CHANGING_COMMENT, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
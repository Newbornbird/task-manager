import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DELETE_COMMENT, ACTIVATE_INPUT_FOR_CHANGING_COMMENT, 
  CHANGE_COMMENT, DEACTIVATE_INPUT_FOR_CHANGING_COMMENT } from '../actions';

class Comment extends Component {
  render() {
       return (
        <div className="comment border mt-2 mb-2">
          <h5 className="commentAuthor">{this.props.authorName + ' прокомментировал:'}</h5>
          <textarea
            className = {this.props.commentInformation.inputForUpdatingComment ? "d-block" : "d-none"} 
            name = "inputForUpdatingComment" 
            value = {this.props.commentInformation.commentText} 
            id = "" 
            cols = "62" 
            rows = "2"
            onChange = { (event) => {this.props.CHANGE_COMMENT(this.props.commentId, event.target.value)} }
            >
          </textarea>
          <p 
            className = {this.props.commentInformation.inputForUpdatingComment ? "d-none commentText" : "d-block commentText"}
          >
            {this.props.commentInformation.commentText}
          </p>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick={()=> {this.props.DELETE_COMMENT(this.props.cardId, this.props.commentId)} }
            >
              Удалить
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick = { () => {this.props.ACTIVATE_INPUT_FOR_CHANGING_COMMENT(this.props.commentId)} }
            >
              Изменить
            </button>
            <button 
              type="button" 
              className={this.props.commentInformation.inputForUpdatingComment ? "d-block btn btn-secondary btn-sm" : "d-none btn btn-secondary btn-sm"} 
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
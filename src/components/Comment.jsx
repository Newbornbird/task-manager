import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.author,
      comment: {
        commentText: this.props.comment.commentText,
        inputForUpdatingComment: this.props.comment.inputForUpdatingComment
      }
      
    }
  }
  
  render() {
       return (
        <div className="comment border mt-2 mb-2">
          <h5 className="commentAuthor">{this.props.author}</h5>
          <textarea
            autoFocus={true} 
            className={this.props.comment.inputForUpdatingComment ? "d-block" : "d-none"} 
            name="inputForUpdatingComment" 
            value={this.props.comment.commentText} 
            id="" cols="62" 
            rows="2"
            onChange = { (event) => {this.props.updateComment(event, this.props.comment)} }
            >
          </textarea>
          <p 
            className = {this.props.comment.inputForUpdatingComment ? "d-none commentText" : "d-block commentText"}
            >
            {this.props.comment.commentText}
          </p>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick={()=> {this.props.removeComment(this.props.comment)} }>
              Удалить
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick = { () => {this.props.activateInputForUpdateComments(this.props.comment)} }
              >
              Изменить
            </button>
            <button 
              type="button" 
              className={this.props.comment.inputForUpdatingComment ? "d-block btn btn-secondary btn-sm" : "d-none btn btn-secondary btn-sm"} 
              onClick = { () => {this.props.saveUpdatingComment(this.props.comment)} }
              >
              Сохранить
            </button>
            
          </div>
                   
          
        </div>
                
      )
    }
}

  export default Comment;
import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Author: this.props.Author,
      commentText: this.props.commentText,
      
    }
  }
  
  render() {
       return (
        <div className="comment border mt-2 mb-2">
          <h5 className="commentAuthor">Автор комментария</h5>
          <textarea className="d-none border-0" name="" id="" cols="62" rows="3"></textarea>
          <p className="d-block commentText">{this.props.commentText}</p>
          
          <button type="button" className="btn btn-secondary btn-sm" onClick={()=> {this.props.removeComment(this.state.commentText)} }>Удалить</button>
            
          
          
        </div>
                
      )
    }
}

  export default Comment;
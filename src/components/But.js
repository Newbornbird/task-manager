import React, { Component } from 'react';

class But extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: true
      }
    }
    render() {
      return ( 
        <button type="button" className="close btn btn-primary" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      )
    }
  }

export default But;
import React, { Component } from 'react';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  }

  render() {

    if (this.state.renderError){
      this.foo.bar = 5;
    }

    return (
      <button 
        className="btn btn-danger btn-lg mb-3 ml-3"
        onClick={()=> this.setState({ renderError: true })}>
        Throw Error
      </button>
    )
  }
}
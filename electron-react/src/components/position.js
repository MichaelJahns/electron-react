import React, { Component } from 'react';

export default class Position extends Component {
  render() {
      console.log(this.props)
    return (
      <React.Fragment>
        <h3> {this.props.position.symbol} </h3>
        <p> {this.props.position.assetType} </p>
        <p> Purchased </p>
        <p> Last {this.props.position.askPrice} </p>
        <p> Gain % </p>
        <p> Gain $ </p>

       <p> <span className='targetValue'> Target Price </span> </p> 
      </React.Fragment>
      
    );
  }
}
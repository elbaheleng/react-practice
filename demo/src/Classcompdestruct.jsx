import React, { Component } from 'react'

export default class Classcompdestruct extends Component {
    
  render() {
    console.log(this.props);
    
    const named = this.props.n1
    
    
    return (
        <>
        <div>From class component - class destructing</div>
        <div>{named}</div>
        </>

    )
  }
}

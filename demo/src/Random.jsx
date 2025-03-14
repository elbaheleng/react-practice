import React, { Component } from 'react'

export default class Random extends Component {
  constructor() {// to initialise values 
    super()// for accessing properties from the parent class
    this.state = { carname: "Swift" }
  }

  changeValue(data) {
    this.setState({ carname: data })
  }

  render() {


    return (
      <>
        <div>From Random component</div>
        <div>{this.props.n1}</div>
        <div>{this.props.n2}</div>
        <div>{this.props.n3}</div>

        <h3>State</h3>
        <p>Car name is : {this.state.carname}</p>
        <button className='btn btn-primary' onClick={() => this.changeValue('Auto')}> Click</button>
      </>

    )
  }
}

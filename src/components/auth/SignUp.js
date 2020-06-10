import React, { Component } from 'react'

class SignUp extends Component {
  //initial empty state
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  
  handleChange = (e) => {
    this.setState({
      //sets state in signup while catching error
      [e.target.id]: e.target.value
      //sets state for whatever ID is provided from the input value div and stores in state above
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //prevent render
    console.log(this.state)
    //let developer know there is an error
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp

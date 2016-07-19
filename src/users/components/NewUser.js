'use strict'

import React, { Component } from 'react'

class NewUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      level: ''
    }
    this.firstNameChange = this.firstNameChange.bind(this)
    this.lastNameChange = this.lastNameChange.bind(this)
    this.levelChange = this.levelChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  firstNameChange (e) {
    this.setState({
      firstName: e.target.value
    })
  }

  lastNameChange (e) {
    this.setState({
      lastName: e.target.value
    })
  }

  levelChange (e) {
    this.setState({
      level: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log('submit')
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.level)
  }

  render () {
    return (
      <div className='newUser'>
        <div className='align-center'>
          <h1>
            Welcome to Vocabubands!
          </h1>
          <p className='margin-top-30'>
            Fill out the form below to get started.
          </p>
        </div>
        <form id='new-user-form' method='post' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='firstName'>
              First Name
            </label>
            <input type='text' className='form-control' id='firstName' placeholder='John' value={this.state.firstName} onChange={this.firstNameChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>
              Last Name
            </label>
            <input type='text' className='form-control' id='lastName' placeholder='Doe' value={this.state.lastName} onChange={this.lastNameChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='level'>
              Enrollment Level
            </label>
            <input type='text' className='form-control' id='level' placeholder='e.g. FB, AA, UP' value={this.state.level} onChange={this.levelChange} />
          </div>
          <input type='submit' className='btn btn-primary' value='Submit' />
        </form>
      </div>
    )
  }
}

export default NewUser

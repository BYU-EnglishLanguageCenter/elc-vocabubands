'use strict'

import React, { Component } from 'react'
import axios from 'axios'

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

    const elements = [...e.target.elements]
    let index

    for (index in elements) {
      elements[index].disabled = true
    }

    axios.post(`/graphql?query=mutation{addNewUser(user:{first_name:"${this.state.firstName}",last_name:"${this.state.lastName}",level:"${this.state.level}"}){first_name}}`).then(response => {
      window.location.assign('https://cas.byu.edu/cas/login?service=http://localhost:8080')
    }).catch(err => {
      console.log(err)
    })
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
            <input type='text' className='form-control' id='firstName' value={this.state.firstName} onChange={this.firstNameChange} autoFocus required />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>
              Last Name
            </label>
            <input type='text' className='form-control' id='lastName' value={this.state.lastName} onChange={this.lastNameChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='level'>
              Select your enrollment level
            </label>
            <select className='form-control' id='level' onChange={this.levelChange}>
              <option value=''>--------</option>
              <option value='FP'>Foundations Prep</option>
              <option value='FA'>Foundations A</option>
              <option value='FB'>Foundations B</option>
              <option value='FC'>Foundations C</option>
              <option value='GAP'>Academic Prep</option>
              <option value='AA'>Academic A</option>
              <option value='AB'>Academic B</option>
              <option value='UP'>University Prep</option>
              <option value='none'>None</option>
            </select>
          </div>
          <input type='submit' className='btn btn-primary' value='Submit' />
        </form>
      </div>
    )
  }
}

export default NewUser

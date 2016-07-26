'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NewUser = ({ firstNameChange, handleSubmit, lastNameChange, levelChange, netIDChange, showFullForm, typeChange, user }) => {
  let cancel = ''
  let netIDForm = ''
  let submit =
    <a href='https://cas.byu.edu/cas/login?service=http://localhost:8080' className='btn btn-primary' onClick={handleSubmit}>
      Submit
    </a>
  let typeForm = ''

  if (showFullForm) {
    cancel =
      <Link to='/users' className='btn btn-default pull-right' type='button'>
        Cancel
      </Link>

    netIDForm =
      <div className='form-group'>
        <label htmlFor='netID'>
          Net ID
        </label>
        <input type='text' className='form-control' id='netID' value={user.net_id} onChange={netIDChange} required />
      </div>

    submit =
      <Link to='/users' className='btn btn-primary' onClick={handleSubmit}>
        Submit
      </Link>

    typeForm =
      <div className='form-group'>
        <label htmlFor='type'>
          User Type
        </label>
        <select className='form-control' id='type' value={user.type} onChange={typeChange} required>
          <option value='admin'>Admin</option>
          <option value='student'>Student</option>
          <option value='teacher'>Teacher</option>
        </select>
      </div>
  }

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
      <form id='new-user-form' method='post' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>
            First Name
          </label>
          <input type='text' className='form-control' id='firstName' value={user.first_name} onChange={firstNameChange} autoFocus required />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>
            Last Name
          </label>
          <input type='text' className='form-control' id='lastName' value={user.last_name} onChange={lastNameChange} required />
        </div>
        {netIDForm}
        <div className='form-group'>
          <label htmlFor='level'>
            Enrollment Level
          </label>
          <select className='form-control' id='level' value={user.level} onChange={levelChange}>
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
        {typeForm}
        {submit}
        {cancel}
      </form>
    </div>
  )
}

NewUser.propTypes = {
  firstNameChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  lastNameChange: PropTypes.func.isRequired,
  levelChange: PropTypes.func.isRequired,
  netIDChange: PropTypes.func.isRequired,
  showFullForm: PropTypes.bool.isRequired,
  typeChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default NewUser

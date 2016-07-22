'use strict'

import React, { PropTypes } from 'react'

const NewUser2 = ({ user, firstNameChange, lastNameChange, levelChange, handleSubmit }) => (
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
      <input type='submit' className='btn btn-primary' value='Submit' />
    </form>
  </div>
)

export default NewUser2

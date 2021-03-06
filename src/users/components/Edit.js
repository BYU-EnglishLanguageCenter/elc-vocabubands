'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Edit = ({ firstNameChange, handleSubmit, lastNameChange, levelChange, netIDChange, sendDelete, showFullForm, typeChange, user }) => {
  let netIDForm, typeForm

  let cancel =
    <a href='/' className='btn btn-default pull-right' type='button'>
      Return
    </a>

  let deleteButton =
    <button className='btn btn-danger' onClick={sendDelete} type='button'>
      Delete
    </button>

  let submit =
    <button className='btn btn-primary' onClick={handleSubmit} type='button'>
      Submit
    </button>

  if (showFullForm) {
    cancel =
      <Link to='/users' className='btn btn-default pull-right' type='button'>
        Cancel
      </Link>

    deleteButton =
      <Link to='/users' className='btn btn-danger' onClick={sendDelete} type='button'>
        Delete
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
    <div className='edit'>
      <div className='align-center'>
        <h1>
          Edit User Information
        </h1>
        <p className='margin-top-30'>
          Make changes in the form below, then submit.
        </p>
      </div>
      <form id='edit-user-form' method='post' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>
            First Name
          </label>
          <input type='text' className='form-control' id='firstName' value={user.first_name} onChange={firstNameChange} required />
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
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-4 butn-edit-group'>
              {submit}
            </div>
            <div className='col-xs-4 butn-edit-group align-center'>
              {deleteButton}
            </div>
            <div className='col-xs-4 butn-edit-group'>
              {cancel}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

Edit.propTypes = {
  firstNameChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  lastNameChange: PropTypes.func.isRequired,
  levelChange: PropTypes.func.isRequired,
  netIDChange: PropTypes.func.isRequired,
  sendDelete: PropTypes.func.isRequired,
  showFullForm: PropTypes.bool.isRequired,
  typeChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default Edit

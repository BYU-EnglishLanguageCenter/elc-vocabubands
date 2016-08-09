'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const EditOptions = ({ id, type }) => (
  <div className='edit-lists-options' key={id}>
    <h3 className='inline'>
      List {id}
    </h3>
    <div className='inline'>
      <button className='btn btn-primary btn-sm butn-edit-list'>
        Edit
      </button>
      <Link to={`/lists/${type}/${id}/bare`} className='btn btn-default btn-sm'>
        View
      </Link>
    </div>
  </div>
)

EditOptions.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string
}

export default EditOptions

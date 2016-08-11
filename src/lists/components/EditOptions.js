'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const EditOptions = ({ id, type }) => (
  <div className='edit-lists-options' key={id}>
    <h3 className='inline'>
      List {id}
    </h3>
    <div className='butn-edit-options inline'>
      <div className='btn-group btn-group-justified' role='group' aria-label='...'>
        <Link to={`/lists/${type}/${id}/edit`} className='btn btn-primary btn-sm' role='button'>
          Edit
        </Link>
        <Link to={`/lists/${type}/${id}/bare`} className='btn btn-default btn-sm' role='button'>
          View
        </Link>
      </div>
    </div>
  </div>
)

EditOptions.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string
}

export default EditOptions

'use strict'

import React, { PropTypes } from 'react'

const EditOptions = ({ id }) => (
  <div className='edit-lists-options' key={id}>
    <h3 className='inline'>
      List {id}
    </h3>
    <div className='inline'>
      <button className='btn btn-primary btn-sm butn-edit-list'>
        Edit
      </button>
      <button className='btn btn-default btn-sm'>
        View
      </button>
    </div>
  </div>
)

EditOptions.propTypes = {
  id: PropTypes.number
}

export default EditOptions

'use strict'

import React from 'react'
import EditOptions from './EditOptions'

const Edit = ({ avl, preAvl }) => {
  const avlLinks = avl.map(id =>
    <EditOptions id={id} type='avl' key={id} />
  )

  const preAvlLinks = preAvl.map(id =>
    <EditOptions id={id} type='preavl' key={id} />
  )

  return (
    <div id='edit-lists'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>
              AVL
            </h1>
            {avlLinks}
          </div>
          <div className='col-md-6'>
            <h1>
              Pre-AVL
            </h1>
            {preAvlLinks}
          </div>
        </div>
      </div>

      <div id='file-upload-container'>
        <h1>
          Upload a New List
        </h1>
        <div className='input-group' id='file-upload'>
          <span className='input-group-btn'>
            <button className='btn btn-default' type='button'>
              Go!
            </button>
          </span>
          <input type='text' className='form-control' placeholder='Search for...' />
        </div>
      </div>

    </div>
  )
}

export default Edit

'use strict'

import React from 'react'
import EditOptions from './EditOptions'

const Edit = ({ avl, getFilename, preAvl, upload }) => {
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

        <form id='form' encType='multipart/form-data'>
          <div className='input-group' id='file-upload'>
            <span className='input-group-btn'>
              <label className='btn btn-default btn-file'>
                Browse
                <input type='file' className='display-none' id='file' onChange={getFilename} accept='.csv,.json' name='file' />
              </label>
            </span>
            <input type='text' className='form-control' id='filename' readOnly name='filename' />
          </div>
          <button className='btn btn-primary' onClick={upload} type='button'>
            Upload
          </button>

        </form>

      </div>

    </div>
  )
}

export default Edit

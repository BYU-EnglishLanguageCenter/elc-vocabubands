'use strict'

import React from 'react'
import EditOptions from './EditOptions'

const Edit = ({ avl, preAvl, load, data }) => {
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
            <h1 onClick={() => load(13)}>
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
    </div>
  )
}

export default Edit

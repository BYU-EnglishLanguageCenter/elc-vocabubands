'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ListTableContainer from '../containers/ListTableContainer'

const ListBare = ({ id, data, type }) => {
  let listType

  switch (type) {
    case 'avl':
      listType = 'AVL'
      break
    case 'preavl':
      listType = 'Pre-AVL'
      break
    default:
      listType = ''
  }

  return (
    <div className='list'>
      <h1 className='inline'>
        {listType} List {id}
      </h1>
      <Link to={'/lists/edit'} className='btn btn-primary pull-right'role='button'>
        Back
      </Link>
      <ListTableContainer />
      <Link to={'/lists/edit'} className='btn btn-primary'role='button'>
        Back
      </Link>
    </div>
  )
}

ListBare.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default ListBare

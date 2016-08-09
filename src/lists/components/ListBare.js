'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ListTable from './ListTable'

const List = ({ id, data, type }) => {
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
      <Link to={'/lists/edit'} className='btn btn-primary'role='button'>
        Back
      </Link>
      <ListTable data={data} />
      <Link to={'/lists/edit'} className='btn btn-primary'role='button'>
        Back
      </Link>
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default List

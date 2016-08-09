'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ListLinks = ({ data, type }) => {
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

  const links = data.map(id =>
    <Link to={`/lists/${type}/${id}`} className='btn btn-primary btn-lg list-link' role='button' key={id}>
      List {id}
    </Link>
  )

  return (
    <div className='allLists'>
      <h1 id='all-lists-header'>
        {listType} Lists
      </h1>
      {links}
    </div>
  )
}

ListLinks.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

export default ListLinks

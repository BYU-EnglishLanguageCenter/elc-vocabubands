'use strict'

import React, { PropTypes } from 'react'
import ListLink from './ListLink'

const AllLists = ({ data, type }) => {
  let listType

  switch (type) {
    case 'avl':
      listType = 'AVL'
      break
    case 'preavl':
      listType = 'Pre-AVL'
      break
    default: listType = ''
  }

  const listLinks = data.map(listID =>
    <ListLink listID={listID} listType={type} key={listID} />
  )

  return (
    <div className='allLists'>
      <h1 id='all-lists-header'>
        {listType} Lists
      </h1>
      {listLinks}
    </div>
  )
}

AllLists.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

export default AllLists

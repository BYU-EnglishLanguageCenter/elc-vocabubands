'use strict'

import React, { PropTypes } from 'react'
import ListLink from './ListLink'

const AllLists = ({ data }) => (
  <div className='allLists'>
    <h1 id='all-lists-header'>
      All Lists
    </h1>
    {data.map(listID =>
      <ListLink key={listID} listID={listID} />
    )}
  </div>
)

AllLists.propTypes = {
  data: PropTypes.array.isRequired
}

export default AllLists

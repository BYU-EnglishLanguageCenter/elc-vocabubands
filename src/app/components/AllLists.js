'use strict'

import React, { PropTypes } from 'react'
import ListLinkContainer from '../containers/ListLinkContainer'

const AllLists = ({ data }) => (
  <div className='allLists'>
    <h1 id='all-lists-header'>
      All Lists
    </h1>
    {data.map(listID =>
      <ListLinkContainer listID={listID} key={listID} />
    )}
  </div>
)

AllLists.propTypes = {
  data: PropTypes.array.isRequired
}

export default AllLists

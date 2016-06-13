'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ListTable from './ListTable'

const List = ({ data, listID }) => (
  <div className='list'>
    <h1>
      List {listID}
    </h1>
    <ListTable data={data} />
    <Link to='/' className='btn btn-primary'role='button'>
      See all Lists
    </Link>
  </div>
)

List.propTypes = {
  data: PropTypes.array.isRequired,
  listID: PropTypes.string.isRequired
}

export default List

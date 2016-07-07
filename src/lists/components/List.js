'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ListTable from './ListTable'

const List = ({ data, id }) => (
  <div className='list'>
    <h1>
      List {id}
    </h1>
    <ListTable data={data} />
    <Link to='/lists/avl' className='btn btn-primary'role='button'>
      See all Lists
    </Link>
  </div>
)

List.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
}

export default List

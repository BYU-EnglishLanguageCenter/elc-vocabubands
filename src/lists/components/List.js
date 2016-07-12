'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ListTableContainer from '../containers/ListTableContainer'

const List = ({ id, type }) => (
  <div className='list'>
    <h1>
      List {id}
    </h1>
    <ListTableContainer />
    <Link to={`/lists/${type}`} className='btn btn-primary'role='button'>
      See all Lists
    </Link>
  </div>
)

List.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default List

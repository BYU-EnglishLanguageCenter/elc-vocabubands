'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ListLink = ({ listID }) => (
  <Link to={'list/' + listID} className='btn btn-primary btn-lg listLink' role='button'>
    List {listID}
  </Link>
)

ListLink.propTypes = {
  listID: PropTypes.number.isRequired
}

export default ListLink

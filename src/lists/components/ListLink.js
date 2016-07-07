'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ListLink = ({ listID, onClick }) => (
  <Link to={`/lists/avl/${listID}`} className='btn btn-primary btn-lg listLink' onClick={onClick} role='button'>
    List {listID}
  </Link>
)

ListLink.propTypes = {
  listID: PropTypes.number.isRequired
}

export default ListLink

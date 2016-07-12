'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ListLink = ({ listID, listType }) => (
  <Link to={`/lists/${listType}/${listID}`} className='btn btn-primary btn-lg listLink' role='button'>
    List {listID}
  </Link>
)

ListLink.propTypes = {
  listID: PropTypes.number.isRequired,
  listType: PropTypes.string.isRequired
}

export default ListLink

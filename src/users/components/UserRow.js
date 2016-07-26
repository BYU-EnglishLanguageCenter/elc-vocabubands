'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const UserRow = ({ _id, first_name, last_name, level, type }) => {
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{level}</td>
      <td>{type}</td>
      <td className='butn-cell-no-style butn-edit-width'>
        <Link to={`/users/edit/${_id}`}>
          <span className='glyphicon glyphicon-pencil edit-pencil' aria-hidden='true' />
        </Link>
      </td>
    </tr>
  )
}

UserRow.propTypes = {
  _id: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default UserRow

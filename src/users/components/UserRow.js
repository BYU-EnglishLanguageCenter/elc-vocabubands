'use strict'

import React from 'react'
import { Link } from 'react-router'

const UserRow = ({ _id, first_name, last_name, level, type, onClick }) => {
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{level}</td>
      <td>{type}</td>
      <td className='butn-cell-no-style butn-edit-width'>
        <Link to={`/users/edit/${_id}`} className='btn btn-default' onClick={onClick}>
          Edit
        </Link>
      </td>
    </tr>
  )
}

export default UserRow

'use strict'

import React from 'react'

const UserRow = ({ first_name, last_name, level, type }) => {
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{level}</td>
      <td>{type}</td>
    </tr>
  )
}

export default UserRow

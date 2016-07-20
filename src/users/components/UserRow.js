'use strict'

import React from 'react'

const UserRow = ({ first_name, last_name, level, type, onClick }) => {
  const showButton = (e) => {
    
  }

  return (
    <tr onMouseOver={showButton}>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{level}</td>
      <td>{type}</td>
      <td className='butn-cell-no-style butn-edit-width'>
        <button className='btn btn-default' onClick={onClick}>
          Edit
        </button>
      </td>
    </tr>
  )
}

export default UserRow

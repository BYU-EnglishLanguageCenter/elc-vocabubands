'use strict'

import React, { PropTypes } from 'react'
import UserRow from './UserRow'

const Users = ({ users }) => {
  const userRows = users.map(user => {
    <UserRow key={user._id} {...user} />
  })

  return (
    <div className='users-table'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Level</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </table>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users

'use strict'

import React, { PropTypes } from 'react'
import UserRow from './UserRow'

const Users = ({ users }) => {
  const userRows = users.map(user =>
    <UserRow key={user._id} {...user} />
  )

  return (
    <div id='users'>
      <h1 id='users-header'>
        Users
      </h1>
      <div className='pull-right' id='users-add-new'>
        <button className='btn btn-success' type='button'>
          Add New
        </button>
      </div>
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
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users

'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import UserRow from './UserRow'

const Users = ({ sortByFirstName, sortByLastName, sortByLevel, sortByType, users }) => {
  const userRows = users.map(user =>
    <UserRow key={user._id} {...user} />
  )

  return (
    <div id='users'>
      <h1 className='inline'>
        Users
      </h1>
      <div className='pull-right' id='users-add-new-butn'>
        <Link to='/users/new' className='btn btn-success' type='button'>
          Add New
        </Link>
      </div>
      <div className='users-table'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th onClick={sortByFirstName}>
                First Name
              </th>
              <th onClick={sortByLastName}>
                Last Name
              </th>
              <th onClick={sortByLevel}>
                Level
              </th>
              <th onClick={sortByType}>
                Type
              </th>
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
  sortByFirstName: PropTypes.func,
  sortByLastName: PropTypes.func,
  users: PropTypes.array
}

export default Users

'use strict'

import React from 'react'

const Admin = () => (
  <div className='admin'>
    <h1>
      Admin Page
    </h1>
    <ul id='admin-options'>
      <li>
        <a href='/lists'>
          Lists - View
        </a>
      </li>
      <li>
        <a href='/lists/edit'>
          Lists - Edit
        </a>
      </li>
      <li>
        <a href='/users'>
          Users
        </a>
      </li>
    </ul>
  </div>
)

export default Admin

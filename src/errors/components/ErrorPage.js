'use strict'

import React from 'react'
import errorInfo from '../errorInfo'

const ErrorPage = ({ status }) => (
  <div className='error'>
    <h1>
      {status}
    </h1>
    <p>
      {errorInfo[status]}
    </p>
  </div>
)

export default ErrorPage

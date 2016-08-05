'use strict'

import React from 'react'
import errorInfo from '../errorInfo'

const ErrorPage = ({ status }) => (
  <div className='error'>
    <h1>
      {status}
    </h1>
    <p>
      {errorInfo[status]} Click the logo in the upper left of this page to get back to the website.
    </p>
  </div>
)

export default ErrorPage

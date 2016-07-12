'use strict'

import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <div className='home'>
    <h1>Select a list type:</h1>
    <ul id='list-types'>
      <li><Link to='/lists/avl'>AVL</Link></li>
      <li><Link to='/lists/preavl'>Pre-AVL</Link></li>
    </ul>
  </div>
)

export default Home

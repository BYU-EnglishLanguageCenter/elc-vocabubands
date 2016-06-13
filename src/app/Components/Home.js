'use strict'

import React from 'react'
import AllLists from './AllLists'

const data = [13, 14]

const Home = () => (
  <div className='home'>
    <AllLists data={data} />
  </div>
)

export default Home

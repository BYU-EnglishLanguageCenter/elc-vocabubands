'use strict'

import React from 'react'
import AllLists from './AllLists'

const data = [13, 14]

const Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
        <AllLists data={data} />
      </div>
    )
  }
})

export default Home

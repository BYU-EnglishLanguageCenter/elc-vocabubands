'use strict'

import React from 'react'
import AllLists from './AllLists.js'

var data = [13, 14]

var Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
        <AllLists data={data} />
      </div>
    )
  }
})

export default Home

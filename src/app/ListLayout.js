import React from 'react'
import List from './List.js'

var ListLayout = React.createClass({
  render: function () {
    return (
      <div>
        <List listID={13} url='/resources/lists/list13.json' />
      </div>
    )
  }
})

export default ListLayout

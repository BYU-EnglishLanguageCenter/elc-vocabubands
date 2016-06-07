'use strict'

import React from 'react'
import List from './List.js'

var ListLayout = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

  render: function () {
    return (
      <div>
        <List listID={this.props.params.id} url={'/resources/lists/list' + this.props.params.id + '.json'} />
      </div>
    )
  }
})

export default ListLayout

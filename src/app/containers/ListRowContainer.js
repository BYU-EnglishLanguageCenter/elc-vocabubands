'use strict'

import React from 'react'
import ListRow from '../components/ListRow'

const ListRowContainer = React.createClass({
  getInitialState: function () {
    return { done: false }
  },

  handleClick: function () {
    this.setState({ done: !this.state.done })
  },

  render: function () {
    return (
      <ListRow {...this.props} done={this.state.done} onClick={this.handleClick} />
    )
  }
})

export default ListRowContainer

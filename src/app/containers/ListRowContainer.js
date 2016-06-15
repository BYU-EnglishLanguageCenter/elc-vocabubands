'use strict'

import React from 'react'
import { connect } from 'react-redux'
import ListRow from '../components/ListRow'

// const ListRowContainer = React.createClass({
//   getInitialState: function () {
//     return { done: false }
//   },
//
//   handleClick: function () {
//     this.setState({ done: !this.state.done })
//   },
//
//   render: function () {
//     return (
//       <ListRow {...this.props} done={this.state.done} onClick={this.handleClick} />
//     )
//   }
// })

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps
  }
}

const ListRowContainer = connect(null, mapDispatchToProps)(ListRow)

export default ListRowContainer

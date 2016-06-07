'use strict'

import React from 'react'

var ListLink = React.createClass({
  propTypes: {
    listID: React.PropTypes.number
  },

  render: function () {
    return (
      <a className='btn btn-primary btn-lg listLink' role='button' href='#'>
        List {this.props.listID}
      </a>
    )
  }
})

var AllLists = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function () {
    var listLinks = this.props.data.map(function (listID) {
      return (
        <ListLink listID={listID} />
      )
    })

    return (
      <div className='allLists'>
        <h1 id='all-lists-header'>
          All Lists
        </h1>
        {listLinks}
      </div>
    )
  }
})

export default AllLists

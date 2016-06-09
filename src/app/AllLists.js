'use strict'

import React from 'react'
import { Link } from 'react-router'

const ListLink = React.createClass({
  propTypes: {
    listID: React.PropTypes.number
  },

  render: function () {
    return (
      <Link to={'list/' + this.props.listID} className='btn btn-primary btn-lg listLink' role='button'>
        List {this.props.listID}
      </Link>
    )
  }
})

const AllLists = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function () {
    var listLinks = this.props.data.map(function (listID) {
      return (
        <ListLink listID={listID} key={listID} />
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

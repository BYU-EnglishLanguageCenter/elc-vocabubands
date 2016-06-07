'use strict'

import React from 'react'
import { Link } from 'react-router'

var ListRow = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render: function () {
    return (
      <tr id={this.props.children.id}>
        <td>{this.props.children.word}</td>
        <td>{this.props.children.support_words}</td>
        <td>{this.props.children.definition}</td>
        <td>{this.props.children.building_words}</td>
      </tr>
    )
  }
})

var ListTable = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function () {
    var listRows = this.props.data.map(function (row) {
      return (
        <ListRow key={row.id}>
          {row}
        </ListRow>
      )
    })

    return (
      <div className='listTable'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Word</th>
              <th>Support Words</th>
              <th>Definition</th>
              <th>Building Words</th>
            </tr>
          </thead>
          <tbody>
            {listRows}
          </tbody>
        </table>
      </div>
    )
  }
})

var List = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    listID: React.PropTypes.string
  },

  render: function () {
    return (
      <div className='list'>
        <h1>
          List {this.props.listID}
        </h1>
        <ListTable data={this.props.data} />
        <Link to='/' className='btn btn-primary' role='button'>
          See all Lists
        </Link>
      </div>
    )
  }
})

export default List

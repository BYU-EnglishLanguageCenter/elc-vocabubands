'use strict'

import React from 'react'
import { Link } from 'react-router'

const ListRow = React.createClass({
  getInitialState: function () {
    return { done: false }
  },

  propTypes: {
    children: React.PropTypes.object
  },

  handleClick: function () {
    this.setState({ done: !this.state.done })
  },

  render: function () {
    const { id, word, support_words, definition, building_words } = this.props.children
    const rowClass = this.state.done ? 'row-done' : 'row-normal'
    const butnClass = this.state.done ? 'butn-undo' : 'butn-done'
    const butnText = this.state.done ? 'Undo' : 'Done'

    return (
      <tr className={rowClass} id={'row' + id}>
        <td>{word}</td>
        <td>{support_words}</td>
        <td>{definition}</td>
        <td>{building_words}</td>
        <td className='butn-cell-no-style'>
          <button className={butnClass} onClick={this.handleClick}>
            {butnText}
          </button>
        </td>
      </tr>
    )
  }
})

const ListTable = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function () {
    const listRows = this.props.data.map(function (row) {
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

const List = React.createClass({
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

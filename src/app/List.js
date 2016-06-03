import React from 'react'

var ListRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>detailed.j</td>
        <td>comprehensive; complete;</td>
        <td>including a lot of information</td>
        <td>precise; thorough</td>
      </tr>
    )
  }
})

var ListTable = React.createClass({
  render: function () {
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
            <ListRow />
            <ListRow />
          </tbody>
        </table>
      </div>
    )
  }
})

var List = React.createClass({
  propTypes: {
    list_id: React.PropTypes.number
  },

  render: function () {
    return (
      <div className='list'>
        <h1>List {this.props.list_id}</h1>
        <ListTable />
      </div>
    )
  }
})

export default List

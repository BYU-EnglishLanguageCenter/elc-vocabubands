import React from 'react'

var data = [
  {id: 1, word: 'detailed.j', support_words: 'comprehensive; complete;', definition: 'including a lot of information', building_words: 'precise; thorough'},
  {id: 2, word: 'exclude.v', support_words: 'prevent', definition: 'to prevent someone from doing something; to leave out something', building_words: 'preclude; proscribe; disallow'}
]

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
    list_id: React.PropTypes.number
  },

  render: function () {
    return (
      <div className='list'>
        <h1>List {this.props.list_id}</h1>
        <ListTable data={data}/>
      </div>
    )
  }
})

export default List

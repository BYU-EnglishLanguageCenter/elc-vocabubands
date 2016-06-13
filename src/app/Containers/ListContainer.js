'use strict'

import React from 'react'
import axios from 'axios'
import List from '../Components/List'

const ListContainer = React.createClass({
  getInitialState: function () {
    return { data: [] }
  },

  propTypes: {
    params: React.PropTypes.object
  },

  componentDidMount: function () {
    this.loadListData()
  },

  loadListData: function () {
    axios.get('/resources/lists/list' + this.props.params.id + '.json').then((response) => {
      this.setState({ data: response.data })
    }).catch((response) => {
      console.log(response)
    })
  },

  render: function () {
    return (
      <div>
        <List data={this.state.data} listID={this.props.params.id} />
      </div>
    )
  }
})

export default ListContainer

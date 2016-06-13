'use strict'

import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import List from '../components/List'


// const ListContainer = React.createClass({
//   getInitialState: function () {
//     return { data: [] }
//   },
//
//   propTypes: {
//     params: React.PropTypes.object
//   },
//
//   componentDidMount: function () {
//     this.loadListData()
//   },
//
//   loadListData: function () {
//     axios.get('/resources/lists/list' + this.props.params.id + '.json').then((response) => {
//       this.setState({ data: response.data })
//     }).catch((response) => {
//       console.log(response)
//     })
//   },
//
//   render: function () {
//     return (
//       <div>
//         <List data={this.state.data} listID={this.props.params.id} />
//       </div>
//     )
//   }
// })

const getListData = (id) => {
  axios.get('/resources/lists/list' + id + '.json').then((response) => {
    return { data: response.data }
  }).catch((response) => {
    console.log(response)
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.listData,
    listID: ownProps.params.id
  }
}

const ListContainer = connect(mapStateToProps)(List)

export default ListContainer

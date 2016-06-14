'use strict'

import React from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.listData,
    listID: ownProps.params.id
  }
}

const ListContainer = connect(mapStateToProps)(List)

export default ListContainer

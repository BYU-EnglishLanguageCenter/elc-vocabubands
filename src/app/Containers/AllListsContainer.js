'use strict'

import { connect } from 'react-redux'
import AllLists from '../components/AllLists'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.allLists
  }
}

const AllListsContainer = connect(mapStateToProps)(AllLists)

export default AllListsContainer

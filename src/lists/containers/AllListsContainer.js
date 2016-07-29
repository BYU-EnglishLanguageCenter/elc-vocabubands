'use strict'

import { connect } from 'react-redux'
import AllLists from '../components/AllLists'

const mapStateToProps = (state, ownProps) => ({
  data: state.allLists,
  type: state.listType
})

const AllListsContainer = connect(mapStateToProps)(AllLists)

export default AllListsContainer

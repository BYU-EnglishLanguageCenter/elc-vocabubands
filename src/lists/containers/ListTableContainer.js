'use strict'

import { connect } from 'react-redux'
import ListTable from '../components/ListTable'

const mapStateToProps = (state, ownProps) => ({
  animateLeave: state.showDataWithChanges,
  data: state.showDataWithChanges ? state.listDataWithChanges : state.listData
})

const ListTableContainer = connect(mapStateToProps)(ListTable)

export default ListTableContainer

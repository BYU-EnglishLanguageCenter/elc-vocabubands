'use strict'

import { connect } from 'react-redux'
import ListRow from '../components/ListRow'
import { rowDone } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  butnCellClass: state.showDataWithChanges ? 'butn-cell-no-style' : 'display-none',
  done: state.rowsDone.indexOf(ownProps.id) !== -1,
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(rowDone(ownProps.id))
  }
})

const ListRowContainer = connect(mapStateToProps, mapDispatchToProps)(ListRow)

export default ListRowContainer

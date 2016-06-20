'use strict'

import { connect } from 'react-redux'
import ListRow from '../components/ListRow'
import { rowDone } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    done: state.rowsDone.indexOf(ownProps.id) !== -1
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(rowDone(ownProps.id))
    }
  }
}

const ListRowContainer = connect(mapStateToProps, mapDispatchToProps)(ListRow)

export default ListRowContainer

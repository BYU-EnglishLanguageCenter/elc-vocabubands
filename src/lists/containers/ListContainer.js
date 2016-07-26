'use strict'

import { connect } from 'react-redux'
import List from '../components/List'
import { saveListChanges } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    showSaveChanges: state.rowsDone.length > 0,
    type: state.listType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  save: () => {
    dispatch(saveListChanges())
  }
})

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

export default ListContainer

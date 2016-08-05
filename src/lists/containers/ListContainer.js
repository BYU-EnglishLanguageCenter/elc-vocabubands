'use strict'

import { connect } from 'react-redux'
import List from '../components/List'
import { clearRowsDone, deleteListChanges, saveListChanges, toggleListData } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id,
  showSaveChanges: state.rowsDone.length > 0,
  type: state.listType,
  whatToShow: state.showDataWithChanges ? 'Show All Words' : 'Show My Words'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  save: (e) => {
    e.target.disabled = true
    dispatch(saveListChanges())
  },

  toggleData: (e) => {
    dispatch(clearRowsDone())
    dispatch(toggleListData())
  },

  undoChanges: () => {
    dispatch(deleteListChanges())
  }
})

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

export default ListContainer

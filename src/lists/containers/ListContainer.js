'use strict'

import { connect } from 'react-redux'
import List from '../components/List'
import { clearRowsDone, saveListChanges, toggleListData } from '../actions/actionCreators'

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
    e.preventDefault()
    dispatch(clearRowsDone())
    dispatch(toggleListData())
  }
})

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

export default ListContainer

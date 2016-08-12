'use strict'

import { connect } from 'react-redux'
import ListEdit from '../components/ListEdit'
import { updateBuildingWords, updateDefinition, updateList, updateSupportWords, updateWord } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  id: state.currentList,
  data: state.listData,
  type: state.listType
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  buildingWordsChange: (index, value) => {
    dispatch(updateBuildingWords(index, value))
  },

  definitionChange: (index, value) => {
    dispatch(updateDefinition(index, value))
  },

  save: () => {
    dispatch(updateList())
  },

  supportWordsChange: (index, value) => {
    dispatch(updateSupportWords(index, value))
  },

  wordChange: (index, value) => {
    dispatch(updateWord(index, value))
  }
})

const ListEditContainer = connect(mapStateToProps, mapDispatchToProps)(ListEdit)

export default ListEditContainer

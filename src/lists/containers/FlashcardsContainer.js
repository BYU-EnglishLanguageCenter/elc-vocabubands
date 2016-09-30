'use strict'

import { connect } from 'react-redux'
import { decrementIndex, incrementIndex, updateIndex } from '../actions/actionCreators'
import Flashcards from '../components/Flashcards'

const mapStateToProps = (state, ownProps) => ({
  data: state.flashcards.shuffledData,
  displayIndex: state.flashcards.displayIndex,
  index: state.flashcards.index,
  size: state.flashcards.shuffledData.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  decrementIndex: () => {
    dispatch(decrementIndex())
  },

  incrementIndex: () => {
    dispatch(incrementIndex())
  },

  updateIndex: (e) => {
    dispatch(updateIndex(e.target.value))
  }
})

const FlashcardsContainer = connect(mapStateToProps, mapDispatchToProps)(Flashcards)

export default FlashcardsContainer

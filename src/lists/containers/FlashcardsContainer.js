'use strict'

import { connect } from 'react-redux'
import { decrementIndex, incrementIndex } from '../actions/actionCreators'
import Flashcards from '../components/Flashcards'

const mapStateToProps = (state, ownProps) => ({
  data: state.flashcards.shuffledData,
  index: state.flashcards.index
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  decrementIndex: () => {
    dispatch(decrementIndex())
  },

  incrementIndex: () => {
    dispatch(incrementIndex())
  }
})

const FlashcardsContainer = connect(mapStateToProps, mapDispatchToProps)(Flashcards)

export default FlashcardsContainer

'use strict'

import { connect } from 'react-redux'
import Flashcards from '../components/Flashcards'

const mapStateToProps = (state, ownProps) => ({
  data: state.shuffledData
})

const FlashcardsContainer = connect(mapStateToProps)(Flashcards)

export default FlashcardsContainer

'use strict'

import { connect } from 'react-redux'
import NewUser2 from '../components/NewUser2'
import { addNewUser, updateFirstName, updateLastName, updateLevel, updateNetID, updateType } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  firstNameChange: (e) => {
    dispatch(updateFirstName(e.target.value))
  },

  lastNameChange: (e) => {
    dispatch(updateLastName(e.target.value))
  },

  levelChange: (e) => {
    dispatch(updateLevel(e.target.value))
  },

  netIDChange: (e) => {
    dispatch(updateNetID(e.target.value))
  },

  typeChange: (e) => {
    dispatch(updateType(e.target.value))
  },

  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(addNewUser())
  }
})

const NewUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewUser2)

export default NewUserContainer

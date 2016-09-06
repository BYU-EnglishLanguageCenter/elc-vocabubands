'use strict'

import { connect } from 'react-redux'
import NewUser from '../components/NewUser'
import { addNewUser, updateFirstName, updateLastName, updateLevel, updateNetID, updateType } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  showFullForm: state.isAdmin,
  user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  firstNameChange: (e) => {
    dispatch(updateFirstName(e.target.value))
  },

  handleSubmit: (e) => {
    e.persist()
    dispatch(addNewUser(e))
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
  }
})

const NewUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewUser)

export default NewUserContainer

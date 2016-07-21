'use strict'

import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { deleteUser, updateFirstName, updateLastName, updateLevel, updateNetID, updateType, updateUser } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  user: state.editUser,

  cancel: () => {
    ownProps.history.goBack()
  }
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
    dispatch(updateUser())
  },

  sendDelete: (e) => {
    dispatch(deleteUser())
  }
})

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit)

export default EditContainer

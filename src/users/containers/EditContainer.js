'use strict'

import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { deleteUser, updateFirstName, updateLastName, updateLevel, updateNetID, updateType, updateUser } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  showFullForm: state.isAdmin,
  user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  firstNameChange: (e) => {
    dispatch(updateFirstName(e.target.value))
  },

  handleSubmit: () => {
    dispatch(updateUser())
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

  sendDelete: (e) => {
    dispatch(deleteUser())
  },

  typeChange: (e) => {
    dispatch(updateType(e.target.value))
  }
})

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit)

export default EditContainer

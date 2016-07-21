'use strict'

import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { updateFirstName, updateLastName, updateLevel, updateNetID, updateType } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  user: state.editUser,

  handleSubmit: (e) => {
    e.preventDefault()
    console.log(state.editUser)
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
  }
})

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit)

export default EditContainer

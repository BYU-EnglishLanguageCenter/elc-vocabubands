'use strict'

import { connect } from 'react-redux'
import Users from '../components/Users'
import { sortFirstName, sortLastName, sortLevel, sortType } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  sortByFirstName: () => {
    dispatch(sortFirstName())
  },

  sortByLastName: () => {
    dispatch(sortLastName())
  },

  sortByLevel: () => {
    dispatch(sortLevel())
  },

  sortByType: () => {
    dispatch(sortType())
  }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

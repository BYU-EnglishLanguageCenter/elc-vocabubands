'use strict'

import { connect } from 'react-redux'
import { loadUserById } from '../actions/actionCreators'
import UserRow from '../components/UserRow'

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,

  loadUser: () => {
    dispatch(loadUserById(ownProps._id))
  }
})

const UserRowContainer = connect(null, mapDispatchToProps)(UserRow)

export default UserRowContainer

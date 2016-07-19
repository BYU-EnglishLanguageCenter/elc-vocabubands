'use strict'

import { connect } from 'react-redux'
import Users from '../components/Users'

const mapStateToProps = (state, ownProps) => ({
  users: state.users
})

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer

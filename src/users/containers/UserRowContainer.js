'use strict'

import { connect } from 'react-redux'
import UserRow from '../components/UserRow'

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  onClick: () => {
    console.log('clicked')
  }
})

const UserRowContainer = connect(mapDispatchToProps)(UserRow)

export default UserRowContainer

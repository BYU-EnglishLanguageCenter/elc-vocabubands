'use strict'

import { connect } from 'react-redux'
import Edit from '../components/Edit'

const mapStateToProps = (state, ownProps) => ({
  user: state.editUser
})

const EditContainer = connect(mapStateToProps)(Edit)

export default EditContainer

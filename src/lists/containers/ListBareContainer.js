'use strict'

import { connect } from 'react-redux'
import ListBare from '../components/ListBare'

const mapStateToProps = (state, ownProps) => ({
  id: state.currentList,
  type: state.listType
})

const ListBareContainer = connect(mapStateToProps)(ListBare)

export default ListBareContainer

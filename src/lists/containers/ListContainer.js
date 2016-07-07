'use strict'

import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    type: state.listType
  }
}

const ListContainer = connect(mapStateToProps)(List)

export default ListContainer

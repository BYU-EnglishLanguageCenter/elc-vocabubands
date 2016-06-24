'use strict'

import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.listData,
    id: state.currentList
  }
}

const ListContainer = connect(mapStateToProps)(List)

export default ListContainer

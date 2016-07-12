'use strict'

import { connect } from 'react-redux'
import ListTable from '../components/ListTable'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.listData
  }
}

const ListTableContainer = connect(mapStateToProps)(ListTable)

export default ListTableContainer

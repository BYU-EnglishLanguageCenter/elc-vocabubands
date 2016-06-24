'use strict'

import { connect } from 'react-redux'
import regenerator from 'regenerator-runtime/runtime'
import ListLink from '../components/ListLink'
import { fetchListData } from '../actions/actionCreators'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listID: ownProps.listID,
    onClick: () => {
      dispatch(fetchListData(ownProps.listID))
    }
  }
}

const ListLinkContainer = connect(null, mapDispatchToProps)(ListLink)

export default ListLinkContainer

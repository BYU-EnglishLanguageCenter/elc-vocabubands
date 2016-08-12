'use strict'

import { connect } from 'react-redux'
import ListLinks from '../components/ListLinks'

const mapStateToProps = (state, ownProps) => {
  let listIDs = []

  state.allLists.map(info => {
    if (info.type === state.listType) {
      listIDs = info.list_ids
    }
  })

  return {
    data: listIDs,
    type: state.listType
  }
}

const ListLinksContainer = connect(mapStateToProps)(ListLinks)

export default ListLinksContainer

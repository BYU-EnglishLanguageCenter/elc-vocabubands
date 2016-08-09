'use strict'

import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { fetchListData } from '../actions/actionCreators'

const mapStateToProps = (state, ownProps) => {
  let avl = []
  let preAvl = []

  state.allLists.map(info => {
    if (info.type === 'avl') {
      avl = info.list_ids
    } else {
      preAvl = info.list_ids
    }
  })

  return {
    avl: avl,
    preAvl: preAvl,
    data: state.listData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: (id) => {
    dispatch(fetchListData(id))
  }
})

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit)

export default EditContainer

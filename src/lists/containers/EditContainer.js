'use strict'

import { connect } from 'react-redux'
import { $ } from '../../../resources/js/util'
import Edit from '../components/Edit'

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

    getFilename: (e) => {
      const filename = e.target.files.item(0).name
      $('filename').value = filename
    }
  }
}

const EditContainer = connect(mapStateToProps)(Edit)

export default EditContainer

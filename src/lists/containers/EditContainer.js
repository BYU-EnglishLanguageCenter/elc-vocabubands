'use strict'

import axios from 'axios'
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
    },

    // NOT WORKING
    upload: (e) => {
      e.preventDefault()
      const formData = new FormData($('form'))
      console.log(formData.get('file'))
      const file = $('file')
      // axios.post('/upload', {
      //   file: file.value
      // })
      // .then(res => console.log(res))
      // .catch(err => console.log(err))
    }
  }
}

const EditContainer = connect(mapStateToProps)(Edit)

export default EditContainer

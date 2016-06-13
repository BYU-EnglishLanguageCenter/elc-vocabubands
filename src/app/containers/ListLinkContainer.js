'use strict'

import axios from 'axios'
import { connect } from 'react-redux'
import ListLink from '../components/ListLink'
import loadListData from '../actions/actionCreators'

var data = [
  {id: 1, word: 'detailed.j', support_words: 'comprehensive; complete;', definition: 'including a lot of information', building_words: 'precise; thorough'},
  {id: 2, word: 'exclude.v', support_words: 'prevent', definition: 'to prevent someone from doing something; to leave out something', building_words: 'preclude; proscribe; disallow'}
]

const getListData = (id) => {
  axios.get('/resources/lists/list' + id + '.json').then((response) => {
    return { data: response.data }
  }).catch((response) => {
    console.log(response)
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch()
    }
  }
}

const ListLinkContainer = connect(null, mapDispatchToProps)(ListLink)

export default ListLinkContainer

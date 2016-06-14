'use strict'

import axios from 'axios'
import { connect } from 'react-redux'
import regenerator from 'regenerator-runtime/runtime'
import ListLink from '../components/ListLink'
import { loadListData } from '../actions/actionCreators'

var data = [
  {id: 1, word: 'detailed.j', support_words: 'comprehensive; complete;', definition: 'including a lot of information', building_words: 'precise; thorough'},
  {id: 2, word: 'exclude.v', support_words: 'prevent', definition: 'to prevent someone from doing something; to leave out something', building_words: 'preclude; proscribe; disallow'},
  {id: 3, word: 'word.n', support_words: 'other words', definition: 'describes a thing', building_words: 'more words'}
]
//
// const getListData = (id) => {
//   axios.get('/resources/lists/list' + id + '.json').then((response) => {
//     console.log(response)
//   }).catch((response) => {
//     console.log(response)
//   })
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  // function * func () {
  //   var data = [5]
    // axios.get('/resources/lists/list13.json').then((response) => {
    //   console.log(response)
    //   data = [3, 4]
    // }).catch((response) => {
    //   data[0] = 1
    // })
  //
  //   yield data
  // }
  //
  // var gen = func()
  // console.log(gen.next().value)

  var promise = new Promise(function (resolve, reject) {
    axios.get('/resources/lists/list13.json').then((response) => {
      resolve(response.data)
    }).catch((response) => {
      console.log(response)
    })
  })

  promise.then((res) => console.log(res))

  return {
    listID: ownProps.listID,
    onClick: () => {
      dispatch(loadListData(data))
    }
  }
}

const ListLinkContainer = connect(null, mapDispatchToProps)(ListLink)

export default ListLinkContainer

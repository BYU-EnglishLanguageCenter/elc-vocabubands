'use strict'

import watchFetchList from './fetchList'
import watchFetchAllLists from './fetchAllLists'
import watchLocationChange from './locationChange'

export default function * rootSaga () {
  yield [
    watchFetchAllLists(),
    watchFetchList(),
    watchLocationChange()
  ]
}

'use strict'

import watchFetchList from './fetchList'
import watchFetchAllLists from './fetchAllLists'

export default function * rootSaga () {
  yield [
    watchFetchAllLists(),
    watchFetchList()
  ]
}

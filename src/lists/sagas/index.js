'use strict'

import watchFetchList from './fetchList'
import watchFetchAllLists from './fetchAllLists'
import watchSaveListChanges from './saveListChanges'

export default function * rootSaga () {
  yield [
    watchFetchAllLists(),
    watchFetchList(),
    watchSaveListChanges()
  ]
}

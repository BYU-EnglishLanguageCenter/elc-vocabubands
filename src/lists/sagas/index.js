'use strict'

import watchFetchAllLists from './fetchAllLists'
import watchFetchList from './fetchList'
import watchFetchListChanges from './fetchListChanges'
import watchSaveListChanges from './saveListChanges'

export default function * rootSaga () {
  yield [
    watchFetchAllLists(),
    watchFetchList(),
    watchFetchListChanges(),
    watchSaveListChanges()
  ]
}

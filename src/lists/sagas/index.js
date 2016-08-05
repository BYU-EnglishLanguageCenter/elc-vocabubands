'use strict'

import watchDeleteListChanges from './deleteListChanges'
import watchFetchAllLists from './fetchAllLists'
import watchFetchList from './fetchList'
import watchFetchListChanges from './fetchListChanges'
import watchSaveListChanges from './saveListChanges'

export default function * rootSaga () {
  yield [
    watchDeleteListChanges(),
    watchFetchAllLists(),
    watchFetchList(),
    watchFetchListChanges(),
    watchSaveListChanges()
  ]
}

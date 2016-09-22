'use strict'

import watchDeleteListChanges from './deleteListChanges'
import watchFetchAllLists from './fetchAllLists'
import watchFetchList from './fetchList'
import watchFetchListChanges from './fetchListChanges'
import watchSaveListChanges from './saveListChanges'
import watchShuffleData from './shuffleData'
import watchUpdateList from './updateList'

export default function * rootSaga () {
  yield [
    watchDeleteListChanges(),
    watchFetchAllLists(),
    watchFetchList(),
    watchFetchListChanges(),
    watchSaveListChanges(),
    watchShuffleData(),
    watchUpdateList()
  ]
}

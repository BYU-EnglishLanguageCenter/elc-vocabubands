'use strict'

import watchFetchEditUser from './fetchEditUser'

export default function * rootSaga () {
  yield [
    watchFetchEditUser()
  ]
}

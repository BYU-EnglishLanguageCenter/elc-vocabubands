'use strict'

import watchFetchEditUser from './fetchEditUser'
import watchFetchUsers from './fetchUsers'

export default function * rootSaga () {
  yield [
    watchFetchEditUser(),
    watchFetchUsers()
  ]
}

'use strict'

import watchFetchEditUser from './fetchEditUser'
import watchFetchUsers from './fetchUsers'
import watchUpdateUser from './updateUser'

export default function * rootSaga () {
  yield [
    watchFetchEditUser(),
    watchFetchUsers(),
    watchUpdateUser()
  ]
}

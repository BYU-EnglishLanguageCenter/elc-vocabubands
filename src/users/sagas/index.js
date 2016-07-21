'use strict'

import watchDeleteUser from './deleteUser'
import watchFetchEditUser from './fetchEditUser'
import watchFetchUsers from './fetchUsers'
import watchUpdateUser from './updateUser'

export default function * rootSaga () {
  yield [
    watchDeleteUser(),
    watchFetchEditUser(),
    watchFetchUsers(),
    watchUpdateUser()
  ]
}

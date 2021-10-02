import { all, takeLatest, put } from 'redux-saga/effects'

import { getRole, getRoleFailed, getRoleSuccess } from './RoleSlice'

import { GET } from './../../common/api'

function* FetchGetRole() {
  const result = yield GET('role')

  yield put(
    result?.ok && result?.status === 200
      ? getRoleSuccess(result.payload)
      : getRoleFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getRole, FetchGetRole)
}

export default function* RoleSaga() {
  yield all([ActionWatcher()])
}

import { put, takeLatest, all } from 'redux-saga/effects'

import { getState, getStateFailed, getStateSuccess } from './StateSlice'

import { GET } from './../../common/api'

function* FetchGetState() {
  const result = yield GET('state')

  yield put(
    result?.ok && result?.status === 200
      ? getStateSuccess(result.payload)
      : getStateFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getState, FetchGetState)
}

export default function* StateSaga() {
  yield all([ActionWatcher()])
}

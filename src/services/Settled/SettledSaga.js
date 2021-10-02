import { put, takeLatest, all } from 'redux-saga/effects'

import { getSettled, getSettledFailed, getSettledSuccess } from './SettledSlice'

import { GET } from '../../common/api'

function* FetchGetSettled() {
  const result = yield GET('settled')

  yield put(
    result?.ok && result?.status === 200
      ? getSettledSuccess(result.payload)
      : getSettledFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getSettled, FetchGetSettled)
}

export default function* SettledSaga() {
  yield all([ActionWatcher()])
}

import { put, takeLatest, all } from 'redux-saga/effects'

import {
  createPerson,
  createPersonFailed,
  createPersonSuccess,
  getPerson,
  getPersonFailed,
  getPersonSuccess,
} from './PersonSlice'

import { GET } from './../../common/api'

function* FetchGetPerson() {
  const result = yield GET('person')

  yield put(
    result?.ok && result?.status === 200
      ? getPersonSuccess(result.payload)
      : getPersonFailed(result.payload)
  )
}

function* FetchCreatePerson({ type, payload }) {
  console.log(createPersonFailed)
  console.log(createPersonSuccess)
  yield put(createPersonSuccess())
}

function* ActionWatcher() {
  yield takeLatest(getPerson, FetchGetPerson)
  yield takeLatest(createPerson, FetchCreatePerson)
}

export default function* PersonSaga() {
  yield all([ActionWatcher()])
}

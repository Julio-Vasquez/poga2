import { put, takeLatest, all } from 'redux-saga/effects'

import {
  createModality,
  createModalityFailed,
  createModalitySuccess,
  getModality,
  getModalityFailed,
  getModalitySuccess,
} from './ModalitySlice'

import { GET } from './../../common/api'

function* FetchGetModality() {
  const result = yield GET('modality')

  yield put(
    result?.ok && result?.status === 200
      ? getModalitySuccess(result.payload)
      : getModalityFailed(result.payload)
  )
}

function* FetchCreateModality({ type, payload }) {
  console.log(createModalityFailed)
  console.log(createModalitySuccess)
  yield put(createModalitySuccess())
}

function* ActionWatcher() {
  yield takeLatest(getModality, FetchGetModality)
  yield takeLatest(createModality, FetchCreateModality)
}

export default function* ModalitySaga() {
  yield all([ActionWatcher()])
}

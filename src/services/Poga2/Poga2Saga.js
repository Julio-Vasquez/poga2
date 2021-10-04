import { put, takeLatest, all } from 'redux-saga/effects'
import {
  createPoga2,
  createPoga2Failed,
  createPoga2Success,
} from './Poga2Slice'

import { POST } from './../../common/api'
import { message } from 'antd'

function* FetchCreatePoga2({ type, payload }) {
  const result = yield POST('poga2/create', payload)
  console.log(result.payload)
  if (result.payload.responseStatus === 200) {
    yield put(createPoga2Success(result.payload.message))

    message.success(
      result.payload.message,
      3,
      () => (window.location.href = '/')
    )
  } else {
    message.error(result.payload.message)
    yield put(createPoga2Failed(result.payload.message))
  }
}

function* ActionWatcher() {
  yield takeLatest(createPoga2, FetchCreatePoga2)
}

export default function* Poga2Saga() {
  yield all([ActionWatcher()])
}

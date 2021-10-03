import { put, takeLatest, all } from 'redux-saga/effects'

import {
  getAgreement,
  getAgreementFailed,
  getAgreementSuccess,
} from './AgreementSlice'

import { GET } from './../../common/api'

function* FetchGetAgreement() {
  const result = yield GET('state')

  yield put(
    result?.ok && result?.status === 200
      ? getAgreementSuccess(result.payload)
      : getAgreementFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getAgreement, FetchGetAgreement)
}

export default function* AgreementSaga() {
  yield all([ActionWatcher()])
}

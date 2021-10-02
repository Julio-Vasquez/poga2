import { put, takeLatest, all } from 'redux-saga/effects'

import {
  getCommittee,
  getCommitteeFailed,
  getCommitteeSuccess,
} from './CommitteeSlice'

import { GET } from './../../common/api'

function* FetchGetCommittee() {
  const result = yield GET('committee')

  yield put(
    result?.ok && result?.status === 200
      ? getCommitteeSuccess(result.payload)
      : getCommitteeFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getCommittee, FetchGetCommittee)
}

export default function* CommitteeSaga() {
  yield all([ActionWatcher()])
}

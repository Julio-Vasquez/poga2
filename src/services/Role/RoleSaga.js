import { all, takeLatest } from 'redux-saga/effects'

function* ActionWatcher() {
  yield takeLatest('', () => '')
}

export default function* AuthSaga() {
  yield all([ActionWatcher()])
}

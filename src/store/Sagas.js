import { fork, all } from 'redux-saga/effects'

import PersonSaga from '../services/Person/PersonSaga'
import RoleSaga from '../services/Role/RoleSaga'

function* RootSagas() {
  yield all([fork(PersonSaga), fork(RoleSaga)])
}

export default RootSagas

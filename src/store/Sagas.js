import { fork, all } from 'redux-saga/effects'

import PersonSaga from '../services/Person/PersonSaga'
import RoleSaga from '../services/Role/RoleSaga'
import ModalitySaga from '../services/Modality/ModalitySaga'

function* RootSagas() {
  yield all([fork(PersonSaga), fork(RoleSaga), fork(ModalitySaga)])
}

export default RootSagas

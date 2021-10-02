import { fork, all } from 'redux-saga/effects'

import CommitteeSaga from '../services/Committee/CommitteeSaga'
import ModalitySaga from '../services/Modality/ModalitySaga'
import PersonSaga from '../services/Person/PersonSaga'
import RoleSaga from '../services/Role/RoleSaga'
import SettledSaga from '../services/Settled/SettledSaga'
import StateSaga from '../services/State/StateSaga'

function* RootSagas() {
  yield all([
    fork(CommitteeSaga),
    fork(ModalitySaga),
    fork(PersonSaga),
    fork(RoleSaga),
    fork(SettledSaga),
    fork(StateSaga),
  ])
}

export default RootSagas

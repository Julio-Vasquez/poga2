import { fork, all } from 'redux-saga/effects'

import AgreementSaga from '../services/Agreement/AgreementSaga'
import CommitteeSaga from '../services/Committee/CommitteeSaga'
import ModalitySaga from '../services/Modality/ModalitySaga'
import PersonSaga from '../services/Person/PersonSaga'
import Poga2Saga from '../services/Poga2/Poga2Saga'
import RoleSaga from '../services/Role/RoleSaga'
import SettledSaga from '../services/Settled/SettledSaga'
import StateSaga from '../services/State/StateSaga'

function* RootSagas() {
  yield all([
    fork(AgreementSaga),
    fork(CommitteeSaga),
    fork(ModalitySaga),
    fork(PersonSaga),
    fork(Poga2Saga),
    fork(RoleSaga),
    fork(SettledSaga),
    fork(StateSaga),
  ])
}

export default RootSagas

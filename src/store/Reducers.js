import { combineReducers } from '@reduxjs/toolkit'

import AgreementReducer, {
  Agreement,
} from '../services/Agreement/AgreementSlice'
import CommitteeReducer, {
  Committee,
} from '../services/Committee/CommitteeSlice'
import ModalityReducer, { Modality } from './../services/Modality/ModalitySlice'
import PersonReducer, { Person } from './../services/Person/PersonSlice'
import Poga2Reducer, { Poga2 } from './../services/Poga2/Poga2Slice'
import RoleReducer, { Role } from './../services/Role/RoleSlice'
import SettledReducer, { Settled } from '../services/Settled/SettledSlice'
import StateReducer, { State } from '../services/State/StateSlice'

const AppReducer = combineReducers({
  [Agreement]: AgreementReducer,
  [Committee]: CommitteeReducer,
  [Modality]: ModalityReducer,
  [Person]: PersonReducer,
  [Poga2]: Poga2Reducer,
  [Role]: RoleReducer,
  [Settled]: SettledReducer,
  [State]: StateReducer,
})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer

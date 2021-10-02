import { combineReducers } from '@reduxjs/toolkit'

import CommitteeReducer from '../services/Committee/CommitteeSlice'
import ModalityReducer from './../services/Modality/ModalitySlice'
import PersonReducer from './../services/Person/PersonSlice'
import RoleReducer from './../services/Role/RoleSlice'
import SettledReducer from '../services/Settled/SettledSlice'
import StateReducer from '../services/State/StateSlice'

const AppReducer = combineReducers({
  Committee: CommitteeReducer,
  Modality: ModalityReducer,
  Person: PersonReducer,
  Role: RoleReducer,
  Settled: SettledReducer,
  State: StateReducer,
})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer

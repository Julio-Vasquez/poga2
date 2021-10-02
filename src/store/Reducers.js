import { combineReducers } from '@reduxjs/toolkit'

import PersonReducer from './../services/Person/PersonSlice'
import RoleReducer from './../services/Role/RoleSlice'
import ModalityReducer from './../services/Modality/ModalitySlice'

const AppReducer = combineReducers({
  Person: PersonReducer,
  Role: RoleReducer,
  Modality: ModalityReducer,
})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer

import { combineReducers } from '@reduxjs/toolkit'

import PersonReducer from './../services/Person/PersonSlice'

import RoleReducer from './../services/Role/RoleSlice'

const AppReducer = combineReducers({
  Person: PersonReducer,
  Role: RoleReducer,
})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer

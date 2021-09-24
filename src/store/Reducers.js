import { combineReducers } from '@reduxjs/toolkit'

const AppReducer = combineReducers({})

const RootReducer = (state, action) => {
  state = undefined
  return AppReducer(state, action)
}

export default RootReducer

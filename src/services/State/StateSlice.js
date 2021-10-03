import { createSlice } from '@reduxjs/toolkit'

export const State = 'State'

const initialState = {
  loadingState: false,
  dataState: [],
  success: false,
  error: false,
}

const StateSlice = createSlice({
  initialState,
  name: State,
  reducers: {
    getState: state => ({
      ...state,
      loadingState: true,
    }),
    getStateSuccess: (state, { payload }) => ({
      ...state,
      loadingState: false,
      success: true,
      error: false,
      dataState: payload,
    }),
    getStateFailed: (state, { payload }) => ({
      ...state,
      loadingState: false,
      success: false,
      error: true,
      dataState: payload,
    }),
  },
})

export const { getState, getStateFailed, getStateSuccess } = StateSlice.actions

export default StateSlice.reducer

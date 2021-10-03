import { createSlice } from '@reduxjs/toolkit'

export const Settled = 'Settled'
const initialState = {
  loadingSettled: false,
  dataSettled: [],
  success: false,
  error: false,
}

const SettledSlice = createSlice({
  initialState,
  name: Settled,
  reducers: {
    getSettled: state => ({
      ...state,
      loadingSettled: true,
    }),
    getSettledSuccess: (state, { payload }) => ({
      ...state,
      loadingSettled: false,
      success: true,
      error: false,
      dataSettled: payload,
    }),
    getSettledFailed: (state, { payload }) => ({
      ...state,
      loadingSettled: false,
      success: false,
      error: true,
      dataSettled: payload,
    }),
  },
})

export const { getSettled, getSettledFailed, getSettledSuccess } =
  SettledSlice.actions

export default SettledSlice.reducer

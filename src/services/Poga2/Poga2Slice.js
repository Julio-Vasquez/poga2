import { createSlice } from '@reduxjs/toolkit'

export const Poga2 = 'Poga2'

const initialState = {
  loadingPoga2: false,
  success: false,
  error: false,
  message: '',
}

const Poga2Slice = createSlice({
  initialState,
  name: Poga2,
  reducers: {
    createPoga2: state => ({
      ...state,
      loadingPoga2: true,
    }),
    createPoga2Failed: (state, { payload }) => ({
      ...state,
      loadingPoga2: false,
      error: true,
      success: false,
      message: payload,
    }),
    createPoga2Success: (state, { payload }) => ({
      ...state,
      loadingPoga2: false,
      error: false,
      success: true,
      message: payload,
    }),
  },
})

export const { createPoga2, createPoga2Failed, createPoga2Success } =
  Poga2Slice.actions

export default Poga2Slice.reducer

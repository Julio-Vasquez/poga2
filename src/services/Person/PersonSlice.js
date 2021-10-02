import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingPerson: false,
  dataPerson: [],
  error: {
    create: false,
    get: false,
  },
  success: {
    create: false,
    get: false,
  },
}

const PersonSlice = createSlice({
  initialState,
  name: 'person',
  reducers: {
    getPerson: state => ({
      ...state,
      loadingPerson: true,
    }),
    getPersonSuccess: (state, { payload }) => ({
      ...state,
      dataPerson: payload,
      loadingPerson: false,
      success: { ...state.success, get: true },
      error: { ...state.error, get: false },
    }),
    getPersonFailed: (state, { payload }) => ({
      ...state,
      dataPerson: payload,
      loadingPerson: false,
      error: { ...state.error, get: true },
      success: { ...state.success, get: false },
    }),

    createPerson: state => ({
      ...state,
      loadingPerson: true,
    }),
    createPersonSuccess: (state, { payload }) => ({
      ...state,
      loadingPerson: false,
      success: { ...state.success, create: true },
      error: { ...state.error, create: false },
    }),
    createPersonFailed: (state, { payload }) => ({
      ...state,
      loadingPerson: false,
      error: { ...state.error, create: true },
      success: { ...state.success, create: false },
    }),
  },
})

export const {
  createPerson,
  createPersonFailed,
  createPersonSuccess,
  getPerson,
  getPersonFailed,
  getPersonSuccess,
} = PersonSlice.actions

export default PersonSlice.reducer

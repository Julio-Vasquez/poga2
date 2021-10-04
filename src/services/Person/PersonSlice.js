import { createSlice } from '@reduxjs/toolkit'

export const Person = 'Person'

const initialState = {
  loadingPerson: false,
  dataStudent: [],
  dataJury: [],
  dataDirector: [],
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
  name: Person,
  reducers: {
    getPerson: state => ({
      ...state,
      loadingPerson: true,
    }),
    getPersonSuccess: (state, { payload }) => ({
      ...state,
      dataStudent: payload.filter(
        item => item.role === '9136b434-54ab-4d36-92e3-3240b3ea96ea'
      ),
      dataJury: payload.filter(
        item => item.role === '388b7c35-801c-469d-a9cb-e106b15ed22b'
      ),
      dataDirector: payload.filter(
        item => item.role === '71bb9ab6-84bf-433f-82ba-c2c88b198827'
      ),
      loadingPerson: false,
      success: { ...state.success, get: true },
      error: { ...state.error, get: false },
    }),
    getPersonFailed: (state, { payload }) => ({
      ...state,
      dataStudent: payload,
      dataJury: payload,
      dataDirector: payload,
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

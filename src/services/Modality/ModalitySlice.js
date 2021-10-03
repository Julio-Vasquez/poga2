import { createSlice } from '@reduxjs/toolkit'

export const Modality = 'Modality'

const initialState = {
  loadingModality: false,
  dataModality: [],
  error: {
    create: false,
    get: false,
  },
  success: {
    create: false,
    get: false,
  },
}

const ModalitySlice = createSlice({
  initialState,
  name: Modality,
  reducers: {
    getModality: state => ({
      ...state,
      loadingModality: true,
    }),
    getModalitySuccess: (state, { payload }) => ({
      ...state,
      dataModality: payload,
      loadingModality: false,
      success: { ...state.success, get: true },
      error: { ...state.error, get: false },
    }),
    getModalityFailed: (state, { payload }) => ({
      ...state,
      dataModality: payload,
      loadingModality: false,
      error: { ...state.error, get: true },
      success: { ...state.success, get: false },
    }),

    createModality: state => ({
      ...state,
      loadingModality: true,
    }),
    createModalitySuccess: (state, { payload }) => ({
      ...state,
      loadingModality: false,
      success: { ...state.success, create: true },
      error: { ...state.error, create: false },
    }),
    createModalityFailed: (state, { payload }) => ({
      ...state,
      loadingModality: false,
      error: { ...state.error, create: true },
      success: { ...state.success, create: false },
    }),
  },
})

export const {
  createModality,
  createModalityFailed,
  createModalitySuccess,
  getModality,
  getModalityFailed,
  getModalitySuccess,
} = ModalitySlice.actions

export default ModalitySlice.reducer

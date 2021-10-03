import { createSlice } from '@reduxjs/toolkit'

export const Agreement = 'Agreement'

const initialState = {
  loadingAgreement: false,
  dataAgreement: [],
  success: false,
  error: false,
}

const AgreementSlice = createSlice({
  initialState,
  name: Agreement,
  reducers: {
    getAgreement: state => ({
      ...state,
      loadingAgreement: true,
    }),
    getAgreementSuccess: (state, { payload }) => ({
      ...state,
      dataAgreement: payload,
      loadingAgreement: false,
      error: false,
      success: true,
    }),
    getAgreementFailed: (state, { payload }) => ({
      ...state,
      dataAgreement: payload,
      loadingAgreement: false,
      error: true,
      success: false,
    }),
  },
})

export const { getAgreement, getAgreementFailed, getAgreementSuccess } =
  AgreementSlice.actions

export default AgreementSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const Committee = 'Committee'

const initialState = {
  loadingCommittee: false,
  dataCommittee: [],
  success: false,
  error: false,
}

const CommitteeSlice = createSlice({
  initialState,
  name: Committee,
  reducers: {
    getCommittee: state => ({
      ...state,
      loadingCommittee: true,
    }),
    getCommitteeFailed: (state, { payload }) => ({
      ...state,
      loadingCommittee: false,
      success: true,
      error: false,
      dataCommittee: payload,
    }),
    getCommitteeSuccess: (state, { payload }) => ({
      ...state,
      loadingCommittee: false,
      success: false,
      error: true,
      dataCommittee: payload,
    }),
  },
})

export const { getCommittee, getCommitteeFailed, getCommitteeSuccess } =
  CommitteeSlice.actions

export default CommitteeSlice.reducer

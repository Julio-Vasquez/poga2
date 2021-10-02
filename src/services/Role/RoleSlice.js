import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingRole: false,
  dataRol: [],
  error: false,
  success: false,
}

export const RoleSlice = createSlice({
  initialState,
  name: 'role',
  reducers: {
    getRole: state => ({
      ...state,
      loadingRole: true,
    }),
    getRoleSuccess: (state, { payload }) => ({
      ...state,
      dataRol: payload,
      loadingRole: false,
      error: false,
      success: true,
    }),
    getRoleFailed: (state, { payload }) => ({
      ...state,
      dataRol: payload,
      loadingRole: false,
      error: true,
      success: false,
    }),
  },
})

export const { getRole, getRoleFailed, getRoleSuccess } = RoleSlice.actions

export default RoleSlice.reducer

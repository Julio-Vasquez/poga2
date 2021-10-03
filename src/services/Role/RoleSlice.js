import { createSlice } from '@reduxjs/toolkit'

export const Role = 'Role'

const initialState = {
  loadingRole: false,
  dataRole: [],
  error: false,
  success: false,
}

export const RoleSlice = createSlice({
  initialState,
  name: Role,
  reducers: {
    getRole: state => ({
      ...state,
      loadingRole: true,
    }),
    getRoleSuccess: (state, { payload }) => ({
      ...state,
      dataRole: payload,
      loadingRole: false,
      error: false,
      success: true,
    }),
    getRoleFailed: (state, { payload }) => ({
      ...state,
      dataRole: payload,
      loadingRole: false,
      error: true,
      success: false,
    }),
  },
})

export const { getRole, getRoleFailed, getRoleSuccess } = RoleSlice.actions

export default RoleSlice.reducer

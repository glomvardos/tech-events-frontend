import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    jwt: null,
    user: null,
  },
  reducers: {
    storeUser(state, action) {
      state.user = action.payload
    },
  },
})

export const authActions = authSlice.actions

export default authSlice

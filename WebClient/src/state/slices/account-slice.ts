import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store.types'
import { AccountSliceState, UserState } from './account-slice.types'

const initialState: AccountSliceState = {
  user: {
    email: '',
    name: '',
  },
}

export const accountSlice = createSlice({
  name: 'account-slice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload
    },
  },
})

//reducer
export const accountReducer = accountSlice.reducer

//actions
export const { setUser } = accountSlice.actions

//selectors
export const selectUserName = createSelector(
  (state: RootState) => state.account.user.name,
  (name) => name
)

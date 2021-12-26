'use-strict'
// External imports
import { createSlice } from '@reduxjs/toolkit'

// Initialization of state
export const initialState = {
  categories: ['Home', 'Food', 'Auto', 'Misc'],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
})

export const {} = categoriesSlice.actions

export const categoriesSelector = (state) => state.categories

export default categoriesSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import { CenterPositionCoordonatesSlice } from './features/CenterPositionCoordonatesSlice'

export const store = configureStore({
  reducer: {
    CenterPositionCoordonatesSlice: CenterPositionCoordonatesSlice.reducer
  },
})
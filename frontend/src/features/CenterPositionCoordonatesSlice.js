import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  center: {}
}

export const CenterPositionCoordonatesSlice = createSlice({
  name: 'CenterPositionCoordonatesSlice',
  initialState,
  reducers: {
    getCoordonates: (state, action) => {
        state.center = action.payload
    },
  },
})

export const { getCoordonates } = CenterPositionCoordonatesSlice.actions

export default CenterPositionCoordonatesSlice.reducer


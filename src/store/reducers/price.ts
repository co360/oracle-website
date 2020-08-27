import { createSlice } from '@reduxjs/toolkit'
import { PayloadType } from './types'

export interface IPriceStore {
  [address: string]: number
}

const defaultStatus: IPriceStore = {}

export const sliceName = 'price'
const priceSlice = createSlice({
  name: sliceName,
  initialState: defaultStatus,
  reducers: {
    getPrice(state) {
      return state
    }
  }
})

export const actions = priceSlice.actions
export const reducer = priceSlice.reducer
export type PayloadTypes = PayloadType<typeof actions>

import { createSlice } from '@reduxjs/toolkit'
import { PayloadType } from './types'

export interface IPriceStore {
  address: string
  price: number
}

const defaultStatus: IPriceStore = {
  address: '',
  price: 0
}

export const sliceName = 'price'
const priceSlice = createSlice({
  name: sliceName,
  initialState: defaultStatus,
  reducers: {
    getPrice(state) {
      console.log(state)
      return state
    }
  }
})

export const actions = priceSlice.actions
export const reducer = priceSlice.reducer
export type PayloadTypes = PayloadType<typeof actions>

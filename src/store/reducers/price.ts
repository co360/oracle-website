import { BigNumber } from 'ethers'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PayloadType } from './types'
import { assets } from '@web3/Contracts/Oracle'

export type IPriceStore = {
  [key in assets]: BigNumber
}

// need better solution how set default value for all keys ?
const defaultStatus: IPriceStore = {
  ADA: BigNumber.from(0),
  ETH: BigNumber.from(0),
  BCH: BigNumber.from(0),
  BNT: BigNumber.from(0),
  BTC: BigNumber.from(0)
}

export const sliceName = 'price'
const priceSlice = createSlice({
  name: sliceName,
  initialState: defaultStatus,
  reducers: {
    setValue(state, action: PayloadAction<{ asset: assets, value: BigNumber }>) {
      state[action.payload.asset] = action.payload.value
      return state
    },
    initializePrices(state) {
      return state
    }
  }
})

export const actions = priceSlice.actions
export const reducer = priceSlice.reducer
export type PayloadTypes = PayloadType<typeof actions>

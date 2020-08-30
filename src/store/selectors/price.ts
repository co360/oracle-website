import { IPriceStore, sliceName } from '../reducers/price'
import { keySelectors, AnyProps } from './helpers'
import { assets } from '@web3/Contracts/Oracle'
import { createSelector } from '@reduxjs/toolkit'
import { BigNumber } from 'ethers'

const store = (s: AnyProps) => s[sliceName] as IPriceStore

export const { ADA, BCH, BNT, BTC, ETH } = keySelectors(store, [
  assets.ADA,
  assets.BCH,
  assets.BNT,
  assets.BTC,
  assets.ETH
])

export const priceSelector = { ADA, BCH, BNT, BTC, ETH }
export const priceInBTC = (asset: assets) =>
  createSelector(store, BTC, (s, b) => {
    const currentAsset = s[asset]
    console.log(currentAsset.currentValue)
    console.log(b.currentValue)
    if (!b.currentValue.isZero()) {
      const priceBTC = currentAsset.currentValue.div(b.currentValue)
      console.log(priceBTC.toString())
      return priceBTC
    } else {
      return BigNumber.from(0)
    }
  })

export default priceSelector

import { call, takeLeading, put, all } from 'typed-redux-saga'

import { actions } from '@reducers/price'
import { OracleProvider, assets } from '@web3/Contracts/Oracle'

function* getAssetPrice(oracleProvider: OracleProvider, asset: assets): Generator {
  const result = yield* call(oracleProvider.getLatestPrice, asset)
  yield put(actions.setValue({ asset: asset, value: result }))
}

function* getPrices(): Generator {
  const oracleProvider = yield* call(OracleProvider.getInstance)
  yield all([
    call(getAssetPrice, oracleProvider, assets.ADA),
    call(getAssetPrice, oracleProvider, assets.BNT),
    call(getAssetPrice, oracleProvider, assets.BTC),
    call(getAssetPrice, oracleProvider, assets.ADA),
    call(getAssetPrice, oracleProvider, assets.BCH)
  ])
}

export function* assetPriceSaga(): Generator {
  yield takeLeading(actions.initializePrices, getPrices)
}

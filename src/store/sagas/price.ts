import { call, takeLeading } from 'redux-saga/effects'

import { oraclefy } from '@web3/metamask'
import { teams } from '@web3/teams'
import { actions } from '@reducers/price'

const getPriceFromOracle = async () => {
  const address: string = teams.contracts.oracle
  const price: number = await oraclefy.prices(address)
  console.log({ address, price })
  return { address, price }
}

function* getAssetPrice(): Generator {
  yield call(getPriceFromOracle)
}

export function* assetPriceSaga(): Generator {
  yield takeLeading(actions.getPrice, getAssetPrice)
}

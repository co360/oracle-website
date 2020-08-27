import { call, put, takeLeading } from 'typed-redux-saga'

import { actions, Status } from '@reducers/provider'
import { getSigner } from '@web3/access'
import { getAddress } from '@web3/signer'

export function* initProvider(): Generator {
  if (!window.ethereum) {
    console.log('error install metamask of browser with metamask support')
    yield put(actions.setStatus(Status.Error))
    return
  }
  const response = yield* call(getSigner)
  console.log(response.getChainId())
  const a = yield* call(getAddress)
  // This does not work why ? We have to write wrappers functions to use them in sagas for web3
  // const address = yield* call(response.getAddress)
  // console.log(address)
  console.log(a)

  if (response) {
    yield put(actions.setStatus(Status.Initalized))
  } else {
    yield put(actions.setStatus(Status.Error))
  }
}

export function* providerSaga(): Generator {
  yield takeLeading(actions.initProvider, initProvider)
}

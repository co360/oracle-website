import { call, put, takeLeading } from 'redux-saga/effects'
import { actions, Status } from '@reducers/provider'
import { getProvider } from '@web3/metamask'

export function* initProvider(): Generator {
  if (!window.ethereum) {
    console.log('error install metamask of browser with metamask support')
    yield put(actions.setStatus(Status.Error))
    return
  }
  console.log('hi')
  const response = yield call(getProvider)
  if (response) {
    yield put(actions.setStatus(Status.Initalized))
  } else {
    yield put(actions.setStatus(Status.Error))
  }
}

export function* providerSaga(): Generator {
  yield takeLeading(actions.initProvider, initProvider)
}

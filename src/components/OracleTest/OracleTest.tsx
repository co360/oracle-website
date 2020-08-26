import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '@reducers/provider'
import { actions as priceAction } from '@reducers/price'

import { Button } from '@material-ui/core'

const OracleTest: React.FC = () => {
  const dispatch = useDispatch()
  const loadMetamask = async () => {
    dispatch(actions.initProvider())
  }
  return (
    <>
      <Button variant='outlined' size='large' color='primary' onClick={loadMetamask}>
        Init Provider
      </Button>
      <Button
        variant='outlined'
        size='large'
        color='primary'
        onClick={() => {
          dispatch(priceAction.getPrice())
        }}>
        Get price
      </Button>
    </>
  )
}

export default OracleTest

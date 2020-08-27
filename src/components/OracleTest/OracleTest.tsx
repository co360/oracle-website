import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Typography } from '@material-ui/core'

import { status } from '@selectors/providers'
import { actions, Status } from '@reducers/provider'
import { actions as priceAction } from '@reducers/price'
import useStyles from './style'

const OracleTest: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentStatus = useSelector(status)
  const loadMetamask = async () => {
    dispatch(actions.initProvider())
  }
  const provider = (status: Status) => {
    console.log(status)
    if (status === Status.Initalized) {
      return <Typography className={classes.message}>Provider initialized</Typography>
    } else if (status === Status.Uninitialized || status === Status.Init) {
      return (
        <Button variant='outlined' size='large' color='primary' onClick={loadMetamask}>
          Init Provider
        </Button>
      )
    } else if (status === Status.Error) {
      return <Typography className={classes.message}>Provider Error</Typography>
    }
  }

  return (
    <Grid>
      <Grid>{provider(currentStatus)}</Grid>
      <Grid>
        <Button
          variant='outlined'
          size='large'
          color='primary'
          onClick={() => {
            dispatch(priceAction.getPrice())
          }}>
          Get price
        </Button>
      </Grid>
    </Grid>
  )
}

export default OracleTest

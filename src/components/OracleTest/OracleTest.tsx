import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Typography } from '@material-ui/core'

import { status } from '@selectors/providers'
import { actions, Status } from '@reducers/provider'
import useStyles from './style'

const OracleTest: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentStatus = useSelector(status)
  const loadMetamask = async () => {
    dispatch(actions.initProvider())
  }
  const provider = (status: Status) => {
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

  const getPrice = (status: Status) => {
    if (status === Status.Initalized) {
      return (
        <Button variant='outlined' size='large' color='primary'>
          Get price
        </Button>
      )
    }
  }

  return (
    <Grid>
      <Grid>{provider(currentStatus)}</Grid>
      <Grid>{getPrice(currentStatus)}</Grid>
    </Grid>
  )
}

export default OracleTest

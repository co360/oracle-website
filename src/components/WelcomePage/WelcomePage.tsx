import React from 'react'
import Grid from '@material-ui/core/Grid'

import useStyles from './style'
import OracleTest from '../OracleTest/OracleTest'

const WelcomePage: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.background}>
      <OracleTest />
    </Grid>
  )
}

export default WelcomePage

import React from 'react'
import Grid from '@material-ui/core/Grid'

import useStyles from './style'
import MainPage from '@components/MainPage/MainPage'

const WelcomePage: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.background}>
      <MainPage />
    </Grid>
  )
}

export default WelcomePage

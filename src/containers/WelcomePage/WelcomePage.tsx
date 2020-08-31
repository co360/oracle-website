import React from 'react'
import Grid from '@material-ui/core/Grid'

import MainPage from '@components/MainPage/MainPage'
import useStyles from './style'

const WelcomePage: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.background}>
      <MainPage />
    </Grid>
  )
}

export default WelcomePage

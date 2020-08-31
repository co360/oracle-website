import React from 'react'
import { Typography, Grid } from '@material-ui/core'
// You should use aliases for imports aka @components
import SynthetifyIconHorizontal from '../SynthetifyIconHorizontal/SynthetifyIconHorizontal'
import Title from '../Title/Title'
import AssetCardsWrapper from '@containers/AssetCardsWrapper/AssetCardsWrapper'
import useStyles from './style'

export const MainPage: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container justify='center'>
      <Grid container className={classes.root} direction='column'>
        <Grid item>
          <SynthetifyIconHorizontal
            className={classes.logo}
            // not perfect but its small project
            onClick={() => window.open('https://synthetify.io')}
          />
        </Grid>
        <Grid item className={classes.titleTop}>
          <Title />
        </Grid>
        <Grid item className={classes.textWrapper}>
          <Typography variant='body1'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Typography>
        </Grid>
        <Grid item>
          <AssetCardsWrapper />
        </Grid>
      </Grid>
    </Grid>
  )
}
export default MainPage

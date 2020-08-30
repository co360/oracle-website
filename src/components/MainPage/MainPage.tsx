import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import useStyles from './style'
import SynthetifyIconHorizontal from '../SynthetifyIconHorizontal/SynthetifyIconHorizontal'
import Title from '../Title/Title'
import AssetCard from '../AssetCard/AssetCard'
import { BigNumber } from 'ethers'

export const MainPage: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container justify='center'>
      <Grid container className={classes.root} direction='column'>
        <Grid item>
          <SynthetifyIconHorizontal className={classes.logo} />
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
          <Grid container direction='column'>
            <Grid container direction='row' alignItems='center' justify='center' className={classes.cardsRow} spacing={4}>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
            </Grid>
            <Grid container direction='row' alignItems='center' justify='center' className={classes.cardsRow} spacing={4}>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
            </Grid>
            <Grid container direction='row' alignItems='center' justify='center' className={classes.cardsRow} spacing={4}>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
              <Grid item>
                <AssetCard title='ETH' currentPrice={BigNumber.from(1200)}></AssetCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default MainPage

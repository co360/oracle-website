import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDown'

export interface IProps {
  title: string
  currentPrice: number
  previousPrice: number
}
// This should use number i changed my mind
export const AssetCard: React.FC<IProps> = ({ title, currentPrice, previousPrice }) => {
  const classes = useStyles()
  const trendingDown = currentPrice < previousPrice

  return (
    <Grid>
      <Grid container direction='column' className={classes.root}>
        <Grid item>
          <Grid container alignItems='center' justify='center'>
            <Grid item>
              <Typography variant='body1' className={classes.title}>
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <ArrowDropDownSharpIcon
                className={trendingDown ? classes.trendDown : classes.trendUp}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='body2' className={classes.text}>
                $ {currentPrice.toString()}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2' className={classes.text}>
                BTC {currentPrice.toString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={trendingDown ? classes.markerDown : classes.marker} />
    </Grid>
  )
}
export default AssetCard
import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './style'
import { allPricesInUSD } from '@selectors/price'
import { actions } from '@reducers/provider'
import { useSelector, useDispatch } from 'react-redux'
import AssetCard from '@components/AssetCard/AssetCard'

export interface IProps {
  title?: string
}
export const AssetCardsWrapper: React.FC<IProps> = () => {
  const classes = useStyles()
  // Added for testing
  // Create container for production and pass prices using props
  const prices = useSelector(allPricesInUSD)
  const dispatch = useDispatch()
  console.log(prices)
  React.useEffect(() => {
    dispatch(actions.initProvider())
  }, [])
  return (
    <Grid container justify='center'>
      <Grid container justify='center' className={classes.root} spacing={4}>
        {prices.map(asset => {
          return (
            <Grid item>
              <AssetCard
                title={asset.name}
                currentPrice={asset.price.currentValue}
                previousPrice={asset.price.previousValue}
              />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
export default AssetCardsWrapper

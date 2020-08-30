import React from 'react'
import { storiesOf } from '@storybook/react'
import AssetCard from './AssetCard'
import { withKnobs } from '@storybook/addon-knobs'
import { BigNumber } from 'ethers'
storiesOf('cards/AssetCard', module)
  .addDecorator(withKnobs)
  .add('trendingUp', () => <AssetCard title='ETH' currentPrice={BigNumber.from(120)} />)
  .add('trendingDown', () => <AssetCard title='ADA' currentPrice={BigNumber.from(120)} />)

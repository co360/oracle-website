import React from 'react'
import { storiesOf } from '@storybook/react'
import AssetCard from './AssetCard'
import { withKnobs } from '@storybook/addon-knobs'
storiesOf('cards/AssetCard', module)
  .addDecorator(withKnobs)
  .add('trendingUp', () => (
    <AssetCard
      title='ETH'
      currentPrice={120}
      previousPrice={110}
      currentPriceBTC={0.8}
      initialized={true}
    />
  ))
  .add('trendingDown', () => (
    <AssetCard
      title='ADA'
      currentPrice={120}
      previousPrice={130}
      currentPriceBTC={0.8}
      initialized={true}
    />
  ))
  .add('notInitialized', () => (
    <AssetCard
      title='ADA'
      currentPrice={120}
      previousPrice={130}
      currentPriceBTC={0.8}
      initialized={false}
    />
  ))

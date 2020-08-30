import React from 'react'
import { storiesOf } from '@storybook/react'
import AssetCard from './AssetCard'
import { withKnobs } from '@storybook/addon-knobs'
storiesOf('cards/AssetCard', module)
  .addDecorator(withKnobs)
  .add('trendingUp', () => <AssetCard title='ETH' currentPrice={120} previousPrice={110} />)
  .add('trendingDown', () => <AssetCard title='ADA' currentPrice={120} previousPrice={130} />)

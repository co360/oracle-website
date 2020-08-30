import React from 'react'
import { storiesOf } from '@storybook/react'
import MainPage from './MainPage'
import { withKnobs } from '@storybook/addon-knobs'
storiesOf('pages/MainPage', module)
  .addDecorator(withKnobs)
  .add('default', () => <MainPage />)

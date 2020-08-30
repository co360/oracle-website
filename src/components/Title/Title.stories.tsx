import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from './Title'
import { withKnobs } from '@storybook/addon-knobs'
storiesOf('text/Title', module)
  .addDecorator(withKnobs)
  .add('default', () => <Title />)
